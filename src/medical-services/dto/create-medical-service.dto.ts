import { IsString, IsNumber, IsDateString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"; 

export class CreateMedicalServiceDto {

    @ApiProperty({example: "Consulta General"})
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({example: "Chequeo Preventivo Anual"})
    @IsString()
    @IsNotEmpty()
    descripción: string;

    @ApiProperty({example: 10000})
    @IsNumber()
    costo: number

    @ApiProperty({example: 30})
    @IsString()
    duración: number

    @ApiProperty({example: '2024-12-01'})
    @IsDateString()
    availableDate: Date

}
