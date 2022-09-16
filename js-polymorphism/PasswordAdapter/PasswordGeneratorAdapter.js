
import generator from 'generate-password';

export default class PasswordGeneratorAdapter {
    // BEGIN (write your solution here)
    generatePassword(length = 8, options = ['numbers', 'symbols']){
        const newOps = {length:length, uppercase:false, numbers:false, symbols:false};
        options.forEach(opt => {
            newOps[opt] = true;
        })
        return generator.generate(newOps);
    }
    // END
}