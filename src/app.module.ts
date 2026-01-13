import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { MedicalServicesModule } from './medical-services/medical-services.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'medic',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    
    UsersModule, AuthModule, MedicalServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
