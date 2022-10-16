import { Observable } from "rxjs";
import { io, Socket } from "socket.io-client";

export default class WebSocketService {

    private static _instance: WebSocketService;
    public socket: Socket
    private port = 9000

    private constructor() {
        this.socket = io(`http://localhost:${this.port}`)
        this.log("Socket connected");
    }

    public emit(event: string, payload?: any, callback?: Function) {
        this.socket.emit(event, payload, callback)
    }

    public listen(event: string): Observable<any> {
        return new Observable((Subscriber) => {
            this.socket.on(event, (payload) => {
                Subscriber.next(payload)
            })
        })
    }

    public log(...messages: string[]) {
        console.log(`${new Date().toLocaleTimeString()} [SOCKET]: ${messages.join(" ")}`);
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }
}