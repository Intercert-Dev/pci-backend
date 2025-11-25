import { BadRequestException, Logger, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '../../../libs/config/config.service';
import { AppModule } from './app/app.module';
import 'reflect-metadata';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: "*",
    });

    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);

    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: (validationErrors: ValidationError[] = []) => {
                let msg = '';
                for (const error of validationErrors) {
                    msg += `Invalid ${error.property} - ${Object.values(error.constraints).join(', ')}, `;
                }
                return new BadRequestException(msg);
            },
        }),
    );

    const config = new ConfigService()
    config.loadFromEnv()
    // const port = config.get().servicePorts.authentication || 3000;
    const port = 3000;
    await app.listen(port);
    // await app.listen(port, '0.0.0.0');
    // console.log(`Server running on http://0.0.0.0:${port}`);
    Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
