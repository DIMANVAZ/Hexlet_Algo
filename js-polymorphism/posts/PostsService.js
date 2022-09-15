
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/';

// BEGIN (write your solution here)
export default class PostsService {
    constructor(httpClient){
        this.httpClient = httpClient;
    }

    async request(postNumber){
        const fullUrl = apiUrl + postNumber.toString().trim();
        const fullResponse = await this.httpClient.get(fullUrl);
        //console.log(fullResponse.data);
        return fullResponse.data;
    }
}