import fs from 'fs';

const save = (tag, filePath) => {
    const html = tag.render();
    fs.writeFileSync(filePath, html);
};

export default save;

import InputTag from './tags/InputTag.js';

const tag = new InputTag('submit', 'Save');
tag.render(); // <input type="submit" value="Save">

const inputTag = new InputTag('submit', 'Save');
const labelTag = new LabelTag('Press Submit', inputTag);
labelTag.render();
// <label>
//   Press Submit
//   <input type="submit" value="Save">
// </label>
