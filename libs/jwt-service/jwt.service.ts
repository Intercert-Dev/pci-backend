import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '../config/config.service';
import {
  ERROR_CODES,
  ErrorMessages,
} from '../constants/commonConstants';
import {
  JWTPayload,
  JWTPayloadForGuest,
  VerifyJWTTokenResult,
} from '../interfaces/authentication/jwtPayload.interface';



@Injectable()
export class JwtService {
  constructor(private configService: ConfigService) {}

  private getJWTTokenInfo() {
    const expiryTimeInSecs = this.configService.get().JWT_EXPIRY_TIME;
    const JWTSecretKey = this.configService.get().JWT_SECRET_KEY;

    if (!JWTSecretKey) {
      throw new Error('JWT secret-key not provided');
    }

    return { expiryTimeInSecs, JWTSecretKey };
  }

  public generateJWTToken(payload: Partial<JWTPayload>): Promise<string> {
    const { expiryTimeInSecs, JWTSecretKey } = this.getJWTTokenInfo();

    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        Buffer.from(JWTSecretKey, 'base64'),
        { expiresIn: expiryTimeInSecs, algorithm: 'HS512' },
        (err: Error | null, token?: string) => {
          if (err || !token) {
            reject({
              statusCode: ERROR_CODES.ERROR_UNKNOWN_SHOW_TO_USER,
              message: 'Error while creating JWT token',
              extraError: err,
            });
          } else {
            resolve(token);
          }
        }
      );
    });
  }

  public generateGuestJWTToken(payload: Partial<JWTPayloadForGuest>): Promise<string> {
    const { expiryTimeInSecs, JWTSecretKey } = this.getJWTTokenInfo();

    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        Buffer.from(JWTSecretKey, 'base64'),
        { expiresIn: expiryTimeInSecs, algorithm: 'HS512' },
        (err: Error | null, token?: string) => {
          if (err || !token) {
            reject({
              statusCode: ERROR_CODES.ERROR_UNKNOWN_SHOW_TO_USER,
              message: 'Error while creating JWT token',
              extraError: err,
            });
          } else {
            resolve(token);
          }
        }
      );
    });
  }

  public generateJWTNeverExpToken(payload: Partial<JWTPayload>): Promise<string> {
    const { JWTSecretKey } = this.getJWTTokenInfo();

    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        Buffer.from(JWTSecretKey, 'base64'),
        { algorithm: 'HS512' },
        (err: Error | null, token?: string) => {
          if (err || !token) {
            reject({
              statusCode: ERROR_CODES.ERROR_UNKNOWN_SHOW_TO_USER,
              message: 'Error while creating JWT token',
              extraError: err,
            });
          } else {
            resolve(token);
          }
        }
      );
    });
  }

  public verifyJWTToken(token: string | null): Promise<VerifyJWTTokenResult> {
    return new Promise((resolve) => {
      if (!token) {
        resolve({
          verified: false,
          error_code: ERROR_CODES.NOT_AUTHORIZED,
          error_message: ErrorMessages.NOT_AUTHORIZED,
          payload: null,
        });
        return;
      }

      const { JWTSecretKey } = this.getJWTTokenInfo();

      jwt.verify(
        token,
        Buffer.from(JWTSecretKey, 'base64'),
        { algorithms: ['HS512'] },
        (err, decoded: any) => {
          if (err || !decoded) {
            if (err instanceof jwt.TokenExpiredError) {
              resolve({
                verified: false,
                error_code: ERROR_CODES.JWT_TOKEN_EXPIRED,
                error_message: ErrorMessages.JWT_TOKEN_EXPIRED,
                payload: null,
              });
            } else {
              resolve({
                verified: false,
                error_code: ERROR_CODES.JWT_TOKEN_INVALID,
                error_message: ErrorMessages.JWT_TOKEN_INVALID,
                payload: null,
              });
            }
          } else {
            resolve({
              verified: true,
              error_code: 0,
              error_message: null,
              payload: decoded as JWTPayload,
            });
          }
        }
      );
    });
  }

  public getJWTTokenPayload(token: string): JWTPayload | null {
    if (!token) {
      return null;
    }
    return jwt.decode(token) as JWTPayload;
  }
}
