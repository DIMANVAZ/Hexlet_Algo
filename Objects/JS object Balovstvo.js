let x = 'x-key';

const obj = {
    a: 4,
    [6/3]:2,
    [x]:'x-value', //'x-key':'x-value'
    [!true]:false,
    array: [3,5],
    arrow: arg => arg + 3,
    canon: function(arg){return arg * 2},
    ["wildee".slice(-2)]:"wildee".slice(0,4),
  //arCan: this.a,   ХХ нельзя ХХ
    get aa() {
        return this.a;
    },
    get_a(){
        return this.a;
    },
    getArCan(a,b){
        return this.arrow(a) + this.canon(b);
    },
    innerO:{
        inA:'A'
    }
}

console.log(Object.keys(obj));

console.log(obj.a);         //4
console.log(obj[6/3]);      //2
console.log(obj[2]);        //2
console.log(obj[x]);        //'x-value'
console.log(obj['x-key']);  //'x-value'
console.log(obj[!true]);    //false
console.log(obj.array);     //[ 3, 5 ]
console.log(obj.arrow(3));  //6
console.log(obj.canon(4));  //8
console.log(obj["wildee".slice(-2)]);//'wild'
//console.log(obj.arCan); - TypeError: Cannot read property 'a' of undefined
console.log(obj.get_a());   //4
console.log(obj.aa);        //4
console.log(obj.getArCan(1,2));//8
console.log(obj.innerO.inA);//A


