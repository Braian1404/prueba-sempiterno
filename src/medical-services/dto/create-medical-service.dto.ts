import { IsString, IsNumber, IsDateString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"; 

export class CreateMedicalServiceDto {

    @ApiProperty({ example: 'Consulta General', description: 'Nombre del servicio' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'Atención primaria de salud', description: 'Descripción detallada' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: 50, description: 'Costo del servicio' })
    @IsNumber()
    cost: number

    @ApiProperty({example: 30, description: 'Duración del servicio en minutos '})
    @IsString()
    duration: number

    @ApiProperty({ example: '2023-10-25', description: 'Fecha de disponibilidad' })
    @IsDateString()
    availableDate: Date

}
