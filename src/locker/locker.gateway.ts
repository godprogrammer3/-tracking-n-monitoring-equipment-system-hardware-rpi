import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { LockerService } from './locker.service';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common';
@WebSocketGateway({ cors: true, namespace: '/locker' })
@Injectable()
export class LockerGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private readonly lockerService: LockerService) {}
  afterInit(server: any) {
    console.log('LockerGateway initialized');
  }
  handleConnection(client: any, ...args: any[]) {
    console.log('Client connected: ', client.id);
  }
  handleDisconnect(client: any) {
    console.log('Client disconnected: ', client.id);
  }
}
