import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { firebaseConfig } from './firebase.config';

import {
  FirebaseServiceCommands as Commands,
  FirebaseCreateDto,
  FirebaseInterfaces,
} from 'types/mail/firebase';

@Injectable()
export class FirebaseService {
  private readonly app: admin.app.App;

  constructor() {
    if (!admin.apps.length) {
      this.app = admin.initializeApp({
        credential: admin.credential.applicationDefault(), // yoki service account
        projectId: firebaseConfig.projectId,
      });
    } else {
      this.app = admin.app();
    }
  }

  getAuth() {
    return admin.auth(this.app);
  }

  async verifyIdToken(token: string) {
    try {
      const decoded = await this.getAuth().verifyIdToken(token);
      return decoded;
    } catch (err) {
      throw new Error('Invalid Firebase token');
    }
  }

  async create(data: FirebaseCreateDto): Promise<FirebaseInterfaces.Response>  {
    const response = await this.getAuth().createUser(data);
    return response;
  }
}
