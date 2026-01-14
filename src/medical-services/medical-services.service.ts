import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { CreateMedicalServiceDto } from './dto/create-medical-service.dto';
import { UpdateMedicalServiceDto } from './dto/update-medical-service.dto';
import { MedicalService } from './entities/medical-service.entity';

@Injectable()
export class MedicalServicesService {

  constructor(
    @InjectRepository(MedicalService)
    private medicalServiceRepository: Repository<MedicalService>,
  ) {}

  async create(createMedicalServiceDto: CreateMedicalServiceDto) {
    const newService = this.medicalServiceRepository.create(createMedicalServiceDto)
    return await this.medicalServiceRepository.save(newService);
  }

  async findAll(startDate?: string, endDate?: string) {
    if (startDate && endDate) {
      return await this.medicalServiceRepository.find({
        where: {
          
          availableDate: Between(new Date(startDate), new Date(endDate))
        }
      });
    }
    return await this.medicalServiceRepository.find();
  }

  async findOne(id: string) {
    const service = await this.medicalServiceRepository.findOneBy({ id });
    if (!service) throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    return service;
  }

  async update (id: string, updateMedicalServiceDto: UpdateMedicalServiceDto){
    const service = await this.medicalServiceRepository.preload({
      id: id,
      ...updateMedicalServiceDto,
    })

    if (!service){
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    }

    return await this.medicalServiceRepository.save(service);
  }

  async remove(id: string) {
    const service = await this.findOne(id);
    if (!service) throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    
    return await this.medicalServiceRepository.softRemove(service);
  }
}
