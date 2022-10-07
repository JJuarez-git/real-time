//import net from 'net';

export default class WebSocketService {

    private static _instance: WebSocketService;
    private socket: WebSocket
    //private client: net.Socket

    private constructor() {
        this.socket = new WebSocket("ws://localhost:6000")
        this.socket.onmessage = function (event) {
            console.log(event.data);
          }
        /* this.client = new net.Socket()
        this.client.connect({port: 6000, host:'localhost'})
        this.client.on('data', (data) => {
            console.log(data.toString('utf-8'));
          }); */
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }
}