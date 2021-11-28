import { StreamAndRecordVideoService } from './stream-and-record-video.service';
import { Logger } from '@nestjs/common';
import * as io from 'socket.io-client';
import { Socket } from 'socket.io-client';
export class StreamAndRecordVideoGateway {
  private socket: Socket;
  private logger: Logger = new Logger('StreamAndRecordVideoGateway');
  constructor(
    private readonly streamAndRecordVideoService: StreamAndRecordVideoService,
  ) {
    this.socket = io(
      `${process.env.SOCKET_IO_HOST}:${process.env.SOCKET_IO_PORT}/${process.env.SOCKET_IO_NAME_SPACE}`,
    );
    this.socket.on('connect', this.onConnectedHandler.bind(this));
    this.socket.on('disconnect', this.onDisconnectedHandler.bind(this));
    this.socket.on('connect_error', this.onConnectErrorHandler.bind(this));
    this.subscribeToEvents(this.socket);
  }

  onConnectedHandler(): void {
    this.logger.log('->socket io connected');
    this.socket.emit('join', { room: process.env.LOCKER_UID });
  }

  onDisconnectedHandler(): void {
    this.logger.log('->socket io disconnected');
  }

  onConnectErrorHandler(error: any): void {
    this.logger.error(`->socket io connect_error: ${error}`);
  }

  subscribeToEvents(socket: Socket): void {
    socket.on(
      `${process.env.LOCKER_UID}/start_live`,
      (data: { camera: number }) => {
        this.logger.log(`->/hello: ${data}`);
      },
    );
  }
}
