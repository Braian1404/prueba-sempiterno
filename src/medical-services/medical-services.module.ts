import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalServicesController } from './medical-services.controller';
import { MedicalServicesService } from './medical-services.service';
import { MedicalService } from './entities/medical-service.entity';


@Module({
  imports: [TypeOrmModule.forFeature([MedicalService])],
  controllers: [MedicalServicesController],
  providers: [MedicalServicesService],
})
export class MedicalServicesModule {}
