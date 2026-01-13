import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Medical Services API')
    .setDescription('Prueba Técnica Backend - Sempiterno Group')
    .setVersion('1.0')
    .addBearerAuth() // Necesario para el CRUD de autenticación 
    .build();

    const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
