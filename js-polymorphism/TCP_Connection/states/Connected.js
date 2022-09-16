export default class Connected {
    // BEGIN (write your solution here)
    constructor(connection) {
        this.connection = connection;
    }

    connect(){
        throw new Error('Уже подключено!');
    }

    write(data){
        this.connection.data.push(data);
    }

    disconnect(){
        this.connection.state = new this.connection.states.disc(this.connection);
        this.connection.status = 'disconnected';
    }
    // END
}