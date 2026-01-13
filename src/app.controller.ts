import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController() // Esto evita que esta ruta de "Bienvenida" aparezca en tu Swagger
@Controller()
export class AppController {
  
  @Get()
  getHello(): string {
    return `
      <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <h1 style="color: #2c3e50;"> API de Servicios Médicos</h1>
        <p style="color: #7f8c8d;">Prueba Técnica Backend - Sempiterno Group</p>
        <hr style="width: 50%; border: 0; border-top: 1px solid #eee; margin: 20px auto;">
        <p>Para explorar los endpoints y acceder a la documentación interactiva:</p>
        <a href="/api/docs" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
          Ir a Swagger UI
        </a>
      </div>
    `;
  }
}