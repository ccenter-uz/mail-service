import { Controller, Post, Body } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post('verify')
  @Post()
  @MessagePattern({ cmd: Commands.CREATE })
  create(@Payload() data: AreaCreateDto): Promise<AreaInterfaces.Response> {
    return this.firebaseService.create(data);
  }
}
