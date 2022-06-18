import fs from 'fs/promises';
import http from 'http';

export default async (port, callback) => {
    // BEGIN (write your solution here)
    const server = http.createServer();
    server.listen(port,(err)=>{
        callback();
    })
    const message = `Welcome to The Phonebook\nRecords count: `

    server.on('request',(req,res) =>{
        fs.readFile('./phonebook.txt').then(data=> {
            const count = data.toString('utf-8').split('\n').length;
            res.end(message + count);
        })
    })
    // END
};
