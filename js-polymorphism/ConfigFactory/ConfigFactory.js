import path from 'path';
import fs from 'fs';
import JsonParser from './parsers/JsonParser.js';
import YamlParser from './parsers/YamlParser.js';
import Config from './Config.js';

// BEGIN (write your solution here)
export default class ConfigFactory{
    static extensions = {
        '.json':JsonParser,
        '.yml':YamlParser,
        '.yaml':YamlParser,
    }

    static factory(filePath){
        const ext = path.extname(filePath);
        const className = ConfigFactory.extensions[ext];
        const fileEntry = fs.readFileSync(filePath, 'utf-8');
        const parsedFile = new className().parse(fileEntry);
        return new Config(parsedFile);
    }
}
// END


const config = ConfigFactory.factory('./__fixtures__/test.yml');

console.log(config.getValue('key')); // value
console.log(config.constructor.name); // Config

const config2 = ConfigFactory.factory('./__fixtures__/test2.json');

const actual = config2.getValue('files').getValue('config');
console.log(actual)//.toBe('json');