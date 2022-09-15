import Easy from './strategies/Easy.js';
import Normal from './strategies/Normal.js';

class TicTacToe {
    // BEGIN (write your solution here)
    constructor(hardness = 'easy') {
        this.lvl = hardness === 'easy' ? new Easy() : new Normal();
        this.field = new Array(9).fill('*');
        this.wins = [[0,1,2],[3,4,5],[6,7,8],[2,5,8],[1,4,7],[0,3,6],[0,4,8],[2,4,6]];
    }
    go(v,h){
        if(v === undefined){
            this.lvl.stepAI(this.field);
        } else {
            this.lvl.stepMan(this.field, v, h);
        }
    return v === undefined ? this.check('o') : this.check('X');
    }

    check(symbol){
        const candidats = [];
        this.field.forEach((val,index) => {
            if(val === symbol){
                candidats.push(index);
            }
        })
        let javap = false;
        this.wins.forEach(win => {
            if(win.every((e) => candidats.includes(e))){
                javap = true;
            }
        })
        return javap;
    }

    print(){
        console.log(this.field);
    }
    // END
}

export default TicTacToe;

const game = new TicTacToe('normal');
game.go();
game.go(2, 1);
game.go();
game.go(1, 0);
game.go()//toBeFalsy();
game.go(1, 2)//toBeFalsy();
const isWinner = game.go();
console.log(isWinner)//toBeTruthy();
game.print()