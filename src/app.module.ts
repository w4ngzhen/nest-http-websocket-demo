import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from "./module/user/user.module";
import {MyWebSocketModule} from "./module/websocket/my-websocket.module";

@Module({
  imports: [UserModule, MyWebSocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
