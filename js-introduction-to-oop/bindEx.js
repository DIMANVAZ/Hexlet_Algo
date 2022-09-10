const user = {
    userName: "Уася",
    sayHi(){
        console.log(`Привет,${this.userName}!`)
    }
}

user.sayHi(); // Привет,Уася!

setTimeout(user.sayHi, 300); // Привет,undefined!

setTimeout(user.sayHi.bind(user), 500); // Привет,Уася!

setTimeout(() => user.sayHi(), 800); // Привет,Уася!

const func = user.sayHi;
func(); // TypeError: Cannot read properties of undefined (reading 'userName')

const func3 = user.sayHi.bind({userName:"Вазген"});
func3(); // Привет,Вазген!

setTimeout(function(){return user.sayHi()},100); // Привет,Уася!


