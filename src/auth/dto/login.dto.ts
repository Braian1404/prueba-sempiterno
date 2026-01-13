import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'Nombre del Usuario', example: 'nombre' })
  username: string;

  @ApiProperty({ description: 'Contraseña del usuario', example: 'clave' })
  password: string;
}