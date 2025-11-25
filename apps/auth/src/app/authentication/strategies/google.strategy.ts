import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '../../../../../../libs/config/config.service';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.getEnvOrThrow('GOOGLE_CLIENT_ID'),
      clientSecret: configService.getEnvOrThrow('GOOGLE_CLIENT_SECRET'),
      // callbackURL: configService.getEnvOrThrow('GOOGLE_CALLBACK_URL'),
      callbackURL: `${configService.getEnvOrThrow('BACKEND_URL')}/api/auth/google/callback`,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const email = profile?.emails?.[0]?.value;

    if (!email || !email.endsWith('@intercert.com')) {
      // return done(new Error('Unauthorized email domain'), false);
      return done(new UnauthorizedException('Unauthorized email domain'), false);
    }

    const user = {
      email,
      name: profile.displayName,
      provider: profile.provider,
      accessToken,
    };

    done(null, user);
  }
}
