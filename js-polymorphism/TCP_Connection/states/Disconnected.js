export default class Disconnected {
    // BEGIN (write your solution here)
    constructor(connection) {
        this.connection = connection;
    }

    connect(){
        this.connection.state = new this.connection.states.conn(this.connection);
        this.connection.status = 'connected';
    }

    write(data){
        throw new Error('Какая дата?! Мент, ты чё, с ума сошёл, что ли, блять?');
    }

    disconnect(){
        throw new Error('Уже ОТключено!');
    }
    // END
}