import { IsString, IsNumber, IsDateString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"; 

export class CreateMedicalServiceDto {

    @ApiProperty({example: "Consulta General"})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: "Chequeo Preventivo Anual"})
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({example: 10000})
    @IsNumber()
    cost: number

    @ApiProperty({example: 30})
    @IsString()
    duration: number

    @ApiProperty({example: '2024-12-01'})
    @IsDateString()
    availableDate: Date

}
