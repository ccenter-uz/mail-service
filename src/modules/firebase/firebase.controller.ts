import { Controller, Post, Body } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  FirebaseServiceCommands as Commands,
  FirebaseCreateDto,
  FirebaseInterfaces,
} from 'types/mail/firebase';
@Controller('auth')
export class AuthController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post()
  @MessagePattern({ cmd: Commands.CREATE })
  create(
    @Payload() data: FirebaseCreateDto
  ): Promise<FirebaseInterfaces.Response> {
    return this.firebaseService.create(data);
  }
}
