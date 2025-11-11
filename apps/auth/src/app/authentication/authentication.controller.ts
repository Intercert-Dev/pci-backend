import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { ResponseHandlerService} from '../../../../../libs/response-handler/response-handler.service'
import { AdminLoginDto } from '../../../../../libs/dtos/authentication/user.dto';


@Controller('auth')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService,
        private readonly responseHandlerService: ResponseHandlerService
    ) {}

    @Get('status')
    getStatus() {
        return { message: 'Authentication service is running Testing' };
    }

    // Endpoint for super admin registration
    @Get('register-super-admin')
    async registerSuperAdmin(@Res() res:Response, @Req() req:Request){
        try {
            const response = await this.authenticationService.registerSuperAdmin();
            return this.responseHandlerService.sendSuccessResponse(res, response);
        }catch (error) {
            console.log("Error in registerSuperAdmin: ", error);
            return this.responseHandlerService.sendErrorResponse(res,error);
        }
    }

    // Endpoint for super admin login
    @Post('super-admin-login')
    async loginSuperAdmin(@Body() loginDto:AdminLoginDto,@Req() req: Request, @Res() res: Response) {
        try{
            // console.log("Login DTO: ", loginDto);
            const response = await this.authenticationService.loginSuperAdmin(loginDto);
            return this.responseHandlerService.sendSuccessResponse(res, response);
        }catch (error) {
            console.log("Error in loginSuperAdmin: ", error);
            return this.responseHandlerService.sendErrorResponse(res, error);
        }
    }
    
}
