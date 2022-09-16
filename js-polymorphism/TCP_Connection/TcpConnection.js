import DisconnectedState from './states/Disconnected.js';
import ConnectedState from './states/Connected.js';

export default class TcpConnection {
    // BEGIN (write your solution here)
    constructor(ip, port){
        this.ip = ip;
        this.port = port;
        this.states = {
            conn:ConnectedState,
            disc:DisconnectedState
        }
        this.state = new this.states.disc(this); // по умолчанию разорвано
        this.status = 'disconnected';
        this.data = [];
    }

    connect(){
        this.state.connect();
    }

    getCurrentState(){
        return this.status;
    }

    write(data){
        this.state.write(data);
    }

    disconnect(){
        this.state.disconnect()
    }
    // END
}

const connection2 = new TcpConnection('33.22.11.22', 20);
connection2.connect();
console.log(connection2.getCurrentState())//.toBe('connected');
connection2.write('one');
connection2.write('two');
connection2.disconnect();
console.log(connection2.getCurrentState())//.toBe('disconnected');


// На вход принимаются ip-адрес и порт
// const connection = new TcpConnection('132.223.243.88', 2342);
// connection.connect();
// connection.getCurrentState(); // connected
// connection.write('data');
// connection.disconnect();
// connection.getCurrentState(); // disconnected
// console.log(connection.getCurrentState())
// // Выбрасывает исключение если нет соединения
// connection.disconnect(); // Boom!


