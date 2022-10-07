import { io, Socket } from "socket.io-client";

export default class WebSocketService {

    private static _instance: WebSocketService;
    public socket: Socket
    private port = 9000

    private constructor() {
        this.socket = io(`http://localhost:${this.port}`)
        this.connection()
    }

    private connection = () => {
        this.socket.on('connect', () => {
            console.log(`[SOCKET]: Connected to socket server at port ${this.port} | ID: ${this.socket.id}`);
        })
        this.socket.on('disconnect', () => {
            console.log(`[SOCKET]: Disconnected from socket server`);
        })
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }
}