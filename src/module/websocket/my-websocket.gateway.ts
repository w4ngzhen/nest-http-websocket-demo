import {WebSocketGateway} from "@nestjs/websockets";

@WebSocketGateway(4000, {
    transports: ['websocket']
})
export class MyWebSocketGateway {

}
