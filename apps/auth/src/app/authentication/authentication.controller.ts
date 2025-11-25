import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { ResponseHandlerService } from '../../../../../libs/response-handler/response-handler.service';
import { AdminLoginDto, CreateUserDto } from '../../../../../libs/dtos/authentication/user.dto';
import {CreateClientDto} from 'libs/dtos/authentication/create-client.dto'; 
import { UserRepositoryService } from 'libs/database/src/repositories/user.repository';
import { SessionRepositoryService } from 'libs/database/src/repositories/session.repository';
import { JwtService } from '../../../../../libs/jwt-service/jwt.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';
import { Response } from 'express';

import { ERROR_CODES } from "libs/constants/commonConstants";
import { ForbiddenException } from '@nestjs/common';
import { PdfServiceService, CertificateData } from 'libs/pdf-service';



@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly responseHandlerService: ResponseHandlerService,
    private readonly userRepository: UserRepositoryService,
    private readonly jwtService: JwtService,
    private readonly sessionRepository: SessionRepositoryService,
    private readonly pdfService: PdfServiceService,
  ) {}

  @Get('status')
  getStatus() {
    return { message: 'Authentication service is running' };
  }

  @Get('register-super-admin')
  async registerSuperAdmin(@Res() res, @Req() req) {
    try {
      const response = await this.authenticationService.registerSuperAdmin();
      return this.responseHandlerService.sendSuccessResponse(res, response);
    } catch (error) {
      console.log('Error in registerSuperAdmin: ', error);
      return this.responseHandlerService.sendErrorResponse(res, error);
    }
  }



  @Post('create-user')
  @UseGuards(JwtAuthGuard)
  async createUser(@Body() createUser: CreateUserDto, @Req() req, @Res() res) {
      try {
        const userdata = req.user; // ✅ now available
        console.log("Authenticated User: ", userdata);
        if(userdata.role !== 'SUPER_ADMIN'){
          throw new ForbiddenException('Access denied. Only SUPER_ADMIN can create users.');
        }
        const response = await this.authenticationService.createUser(createUser,userdata);
        return this.responseHandlerService.sendSuccessResponse(res, response);
      } catch(error) {
        console.log('Error in createUser: ', error);
        return this.responseHandlerService.sendErrorResponse(res, error);
      }
  }

  @Get('user-list')
  @UseGuards(JwtAuthGuard)
  async getUserList(@Req() req, @Res() res:Response) {
      try {
        const userdata = req.user; // ✅ now available
        console.log("Authenticated User: ", userdata);
        if(userdata.role !== 'SUPER_ADMIN'){
          throw new ForbiddenException('Access denied. Only SUPER_ADMIN can view user list.');
        }
        const users = await this.authenticationService.getUsers();
        return this.responseHandlerService.sendSuccessResponse(res, { message: "User list fetched successfully", data: users });
      } catch(error) {
        console.log('Error in getUserList: ', error);
        return this.responseHandlerService.sendErrorResponse(res, error);
      }
    }


  @Post('create-client')
  @UseGuards(JwtAuthGuard)
  async createClient(@Body() createClient: CreateClientDto, @Req() req, @Res() res) {
      try {
        const userdata = req.user; // ✅ now available
        console.log("Authenticated User: ", userdata);
        console.log("createClient Data: ", createClient);
        const response = await this.authenticationService.createClient(createClient,userdata);
        return this.responseHandlerService.sendSuccessResponse(res, response);
      } catch(error) {
        console.log('Error in createClient: ', error);
        return this.responseHandlerService.sendErrorResponse(res, error);
      }
  }

  @Get('client-list')
  @UseGuards(JwtAuthGuard)
  async getClientList(@Req() req, @Res() res) {
      try {
        const userdata = req.user; // ✅ now available
        console.log("Authenticated User: ", userdata);
        const clients = await this.authenticationService.getClient();
        return this.responseHandlerService.sendSuccessResponse(res, { message: "Client list fetched successfully", data: clients });
      } catch(error) {
        console.log('Error in getClientList: ', error);
        return this.responseHandlerService.sendErrorResponse(res, error);
      }
  }

  @Post('login')
  async loginSuperAdmin(@Body() loginDto: AdminLoginDto, @Req() req, @Res() res) {
    try {
      const response = await this.authenticationService.loginSuperAdmin(loginDto);
      return this.responseHandlerService.sendSuccessResponse(res, response);
    } catch (error) {
      console.log('Error in loginSuperAdmin: ', error);
      return this.responseHandlerService.sendErrorResponse(res, error);
    }
  }

  // === GOOGLE AUTH ROUTES ===

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    console.log(">>>>>>>>>>>>>>>>>>>>>run test")
    // Initiates Google OAuth2 login
  }




  


  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    try {
      const user = req.user;
      console.log('Google user info:', user);
      // 1️⃣ Check email domain
      if (!user.email || !user.email.endsWith('@intercert.com')) {
        return res.redirect(`${process.env.FRONTEND_URL}/login?error=unauthorized_email`);
      }

      // 2️⃣ Check if user exists in DB
      const existingUser = await this.userRepository.findOneByEmail(user.email);
      if (!existingUser) {
        return res.redirect(`${process.env.FRONTEND_URL}/login?error=user_not_registered`);
      }

      // 3️⃣ Generate JWT for your app
      const payload = {
        userId: existingUser.user_id,
        email: existingUser.email,
        role: existingUser.role,
      };

      const jwtToken = await this.jwtService.generateJWTToken(payload);
      console.log("jwtToken   >>>>>>>  jwtToken",jwtToken);
      // 4️⃣ Optionally, save session in DB
      await this.sessionRepository.createOrUpdateSession(
                    existingUser.user_id,
                    existingUser.email,
                    jwtToken,
                    user,
                    new Date(Date.now() + 60 * 60 * 1000),
                  );

      // 5️⃣ Redirect to frontend with JWT as query param or cookie
      return res.redirect(`${process.env.FRONTEND_URL}/dashboard?token=${jwtToken}`);

      // Set httpOnly cookie
      // res.cookie('jwt', jwtToken, {
      //   httpOnly: false,
      //   secure: true,
      //   maxAge: 60 * 60 * 1000,              // 1 hour in milliseconds
      //   sameSite: "none",                     // adjust as needed
      //   path: '/',
      // });

      // Redirect to frontend dashboard
      // return res.redirect(`${process.env.FRONTEND_URL}/dashboard`);

    } catch (err) {
      console.error('Google login error:', err);
      return res.redirect(`${process.env.FRONTEND_URL}/login?error=login_failed`);
    }
  }

//   @Get('google/callback')
// @UseGuards(AuthGuard('google'))
// async googleAuthRedirect(@Req() req, @Res() res: Response) {
//   try {
//     const user = req.user;
//     console.log('Google user info:', user);
    
//     // 1️⃣ Check email domain
//     if (!user.email || !user.email.endsWith('@intercert.com')) {
//       return res.redirect(`${process.env.FRONTEND_URL}/login?error=unauthorized_email`);
//     }

//     // 2️⃣ Check if user exists in DB
//     const existingUser = await this.userRepository.findOneByEmail(user.email);
//     if (!existingUser) {
//       return res.redirect(`${process.env.FRONTEND_URL}/login?error=user_not_registered`);
//     }

//     // 3️⃣ Generate JWT for your app
//     const payload = {
//       userId: existingUser.user_id,
//       email: existingUser.email,
//       role: existingUser.role,
//     };

//     const jwtToken = await this.jwtService.generateJWTToken(payload);
//     console.log("jwtToken   >>>>>>>  jwtToken", jwtToken);

//     // 4️⃣ Optionally, save session in DB
//     await this.sessionRepository.createOrUpdateSession(
//       existingUser.user_id,
//       existingUser.email,
//       jwtToken,
//       user,
//       new Date(Date.now() + 60 * 60 * 1000),
//     );

//     // 5️⃣ Redirect to frontend with JWT as query parameter
//     return res.redirect(`${process.env.FRONTEND_URL}/dashboard?token=${jwtToken}`);

//   } catch (err) {
//     console.error('Google login error:', err);
//     return res.redirect(`${process.env.FRONTEND_URL}/login?error=login_failed`);
//   }
// }



  // Generate certificate using existing PDF template
  @Post('generate-certificate-from-template')
  async generateCertificateFromTemplate(
    @Body() certificateData: CertificateData,
    @Res() res: Response,
  ) {
    try {
      console.log('Received certificate data:', certificateData);
      const pdfBuffer = await this.pdfService.modifyExistingCertificate(certificateData);
      
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=certificate-${certificateData.certificateNumber || 'document'}.pdf`,
        'Content-Length': pdfBuffer.length.toString(),
      });
      
      res.send(pdfBuffer);
    } catch (error) {
      return this.responseHandlerService.sendErrorResponse(res, error);
    }
  }

  // Debug endpoint to check template positions
  // @Get('debug-template')
  // async debugTemplate(@Res() res: Response) {
  //   try {
  //     await this.pdfService.debugTemplatePositions();
  //     res.json({ message: 'Check your server console for position information' });
  //   } catch (error) {
  //     res.status(500).json({ 
  //       error: 'Failed to debug template',
  //       message: error.message 
  //     });
  //   }
  // }

  // Quick test with sample data
  // @Get('test-template-certificate')
  // async testTemplateCertificate(@Res() res: Response) {
  //   try {
  //     const sampleData: CertificateData = {
  //       companyName: 'ABC Corporation',
  //       issuanceDate: new Date().toLocaleDateString(),
  //       issuedBy: 'Milan John, PCI-QSA',
  //       certificateNumber: 'CERT-2024-001',
  //       classification: 'Level 1 Compliant',
  //       validTill: '2025-12-31',
  //     };

  //     const pdfBuffer = await this.pdfService.modifyExistingCertificate(sampleData);
      
  //     res.set({
  //       'Content-Type': 'application/pdf',
  //       'Content-Disposition': 'attachment; filename=test-certificate.pdf',
  //       'Content-Length': pdfBuffer.length.toString(),
  //     });
      
  //     res.send(pdfBuffer);
  //   } catch (error) {
  //     res.status(500).json({ 
  //       error: 'Failed to generate test certificate',
  //       message: error.message 
  //     });
  //   }
  // }


}
