import { Injectable, UnauthorizedException, OnModuleInit } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from './enums/role.enum';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

async onModuleInit() {

  const adminExists = await this.userRepository.findOne({ where: { username: 'admin' } });
  
  if (!adminExists) {
    const admin = this.userRepository.create({
      username: 'admin',
      password: '1234',
      role: Role.ADMIN,
    });
    await this.userRepository.save(admin);
  }

  const clientExists = await this.userRepository.findOne({ where: { username: 'cliente' } });
  
  if (!clientExists) {
    const client = this.userRepository.create({
      username: 'cliente',
      password: '1234',
      role: Role.CLIENT,
    });
    await this.userRepository.save(client);

  }
}

  async login(loginDto: any) {
    const { username, password } = loginDto;
    

    const user = await this.userRepository.findOne({ 
      where: { username },
      select: ['id', 'username', 'password', 'role'] 
    });

    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return {
      accessToken: this.jwtService.sign({ 
        username: user.username, 
        sub: user.id, 
        role: user.role 
      }),
    };
  }
}