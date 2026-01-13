import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { MedicalServicesService } from './medical-services.service';
import { CreateMedicalServiceDto } from './dto/create-medical-service.dto';
import { UpdateMedicalServiceDto } from './dto/update-medical-service.dto';
import { roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@ApiTags('Servicios Médicos')

@ApiBearerAuth()
@UseGuards( AuthGuard('jwt'), RolesGuard)
@Controller('medical-services')
export class MedicalServicesController {
  constructor(private readonly medicalServicesService: MedicalServicesService) {}

  @Post()
  @roles('ADMIN')
  @ApiOperation({ summary: 'Crear un nuevo servicio médico', description: 'Solo accesible para administradores.' })
  @ApiResponse({ status: 201, description: 'Servicio creado con éxito.' })
  @ApiResponse({ status: 403, description: 'Prohibido - No tienes permisos de ADMIN.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  create(@Body() createMedicalServiceDto: CreateMedicalServiceDto) {
    return this.medicalServicesService.create(createMedicalServiceDto);
  }

  @Get()
  @roles('ADMIN', 'CLIENT')
  findAll(@Query('startDate') startDate?: string, @Query('endDate') endDate?: string) {
    return this.medicalServicesService.findAll(startDate, endDate);
  }

  @Get(':id')
  @roles('ADMIN', 'CLIENT')
  findOne(@Param('id') id: string) {
    return this.medicalServicesService.findOne(id);
  }

  @Patch(':id')
  @roles('ADMIN')
  update(@Param('id') id: string, @Body() updateMedicalServiceDto: UpdateMedicalServiceDto) {
    return this.medicalServicesService.update(id, updateMedicalServiceDto);
  }

  @Delete(':id')
  @roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.medicalServicesService.remove(id);
  }
}
