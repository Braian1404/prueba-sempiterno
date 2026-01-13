import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalServicesService } from './medical-services.service';
import { CreateMedicalServiceDto } from './dto/create-medical-service.dto';
import { UpdateMedicalServiceDto } from './dto/update-medical-service.dto';

@Controller('medical-services')
export class MedicalServicesController {
  constructor(private readonly medicalServicesService: MedicalServicesService) {}

  @Post()
  create(@Body() createMedicalServiceDto: CreateMedicalServiceDto) {
    return this.medicalServicesService.create(createMedicalServiceDto);
  }

  @Get()
  findAll() {
    return this.medicalServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalServicesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalServiceDto: UpdateMedicalServiceDto) {
    return this.medicalServicesService.update(id, updateMedicalServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalServicesService.remove(id);
  }
}
