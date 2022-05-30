
//объявили функцию, которая принимает аргумент типа string,
// а сама относится к типу void (т.к. ничего не возвращает)
function logName(name: string): void{
    console.log(name);
}

//объявили функцию, принимает 2 number-a, возвращает тип number:
function sum(a: number, b: number): number{
    return a + b;
}

// нормальный вариант, где имя города можно самомУ писать:
type DataNorm = {
    name: string,
    age: number,
    city: {
        cityName: string
    }
}
const normCitizen: DataNorm = {name:'Ayrat', age:32, city:{cityName:'Kazan'}};

//создали объект data, назначив ему "на ходу" тип в виде объекта определённой структуры
//...с обязательным куском city: {cityName: 'London'}:
const data: {name: string; age: number; city: {cityName: 'London'}} = {
    name: 'Kallie',
    age: 14,
    city: {cityName: 'London'}
}

// создали отдельный тип Data (чтобы назначАть его переменным):
type Data = {
    name: string;
    age: number;
    city: {
        cityName: 'Sydney'}
}
//... и создали переменную с этим типом:
const data2: Data = {
    name: "Dilara",
    age: 45,
    city: {cityName: 'Sydney'}
}

// если один из аргументов может не прийти, ставим опциональный оператор
// ... но тогда не сможем использовать его - будет undefined
function logNameAge(name: string, age?: number): void {
    console.log(name, age);
}

// функция с дефолтным аргументом ("еслиЧё"):
function defParam(a: number, b: number = 6): number{
    return a * b;
}

// функция,в типе одного из аргументов которой мы сомневаемся:
function doubt(group: string, howMany: string|number): string{
    return `We bought ${howMany} pieces of ${group}`;
}

// объявили переменную cars типа "массив из строк":
const cars: string[] = ['Toyota', 'Kia', 'Mercedes'];

// объявили переменную типа "смешанный массив" (порядок и размер НЕ важны):
const carsDoubt: (string | number | boolean)[] = [true, 'LandCruiser', 200, 'Toyota'];

// объявили массив неявного типа ИЗ ОДНОГО элемента
type One = [string | number | boolean];
const or1: One = ['Kazan'];
const or2: One = [1/5];
const or3: One = [true];

// объявили константу team вполне конкретного размера и типа
const team: [a:string, b:number, c:object] = ['stroka', 42, {y:'r'}];

