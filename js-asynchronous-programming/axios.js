import axios from 'axios';

const linksArray = ['https://google.coeem','https://google.com', 'https://yandex.ru/', 'https://yandex.ruuu/', '///'];
function extractLinks(array){
    return array;
}

async function getBadLinks(array){
    const linkz = extractLinks(array);

    const promises = linkz.map((link) => axios.get(link)
        .then(v => null)
        .catch(e => link));
    return Promise.all(promises)
        .then(bads => bads.filter(element => element))
        .catch(bads => bads.filter(element => element));
}

const links = await getBadLinks(linksArray);
console.log(links);