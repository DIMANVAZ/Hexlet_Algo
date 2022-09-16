

// BEGIN (write your solution here)

import yaml from 'js-yaml';

export default class YamlParser {
    parse(fileEntry){
        return yaml.load(fileEntry);
    }
}
// END
