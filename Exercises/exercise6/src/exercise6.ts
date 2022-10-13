
// *exercises 5-8: rewrite 1-4 using async/await
//* 'http://hn.algolia.com/api/v1/search' is an API that returns a list of articles, you can use it to test your functions


import { visitFunctionBody } from "typescript";

const link =  "http://hn.algolia.com/api/v1/search";

interface hitsInterface{

    hits: Hit[];
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;

}

interface Hit {

    created_at: string;
    title: string;
    url: string;
    objectID: number;
    points: number;
    num_comments: number;
}


//*exercise 5
async function getFirstArticle() {

    const response = await fetch(link);
    const json = await response.json() as hitsInterface;

    const id = json.hits[0].objectID;
    const newResponse = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
    const newJson = await newResponse.json();
    const hits = newJson;
    console.log(hits);
    return hits;
    
}


console.log(getFirstArticle());
getFirstArticle()

/*
//* exercise 6

async function getPoints() {

    const response = await fetch(link);
    const json = await response.json() as hitsInterface;
    
    const points = json.hits.reduce((acc, curr) => acc + curr.points, 0);
    console.log(points);
    return points;
    
}

console.log(getPoints());
*/
/*
//* exercise 7
//! need to fix this one

async function get40news() {

  return await Promise.all(
    
    [
        function get20news() {

            return fetch("http://hn.algolia.com/api/v1/search?hitsPerPage=20&page=0")
            .then(response => response.json())
            .then(json => json.hits);
            
        }
        
    ,

        function getAnother20() {

            return fetch("http://hn.algolia.com/api/v1/search?hitsPerPage=20&page=1")
            .then(response => response.json())
            .then(json => json.hits);
        }
       
    ]

    ).then((articles) => articles.flat());
};

console.log(get40news());
get40news();

*/
/*
//* exercise 8

async function getFullArticles() {
    
        const response = await fetch(link);
        const json = await response.json() as hitsInterface;
    
        const articles = await Promise.all(
            json.hits.map((hit) => {
                return fetch(`http://hn.algolia.com/api/v1/items/${hit.objectID}`)
                    .then((response) => response.json())
                    .then((articles) => articles);
            })
        );
        console.log(articles);
        return articles;
    }

console.log(getFullArticles());
*/



//*exercise 9: Write an async generator, promisesToAsyncIterator, that receives an array of promises and yields the value of each promise as soon as they are resolved; 

//*exercises 10: write a function promisify, that receives a function, and returns the same function but now returning a Promise


//* exercise 9

async function* promisesToAsyncIterator(promises: Promise<any>[]) {
    
        for (const promise of promises) {
            yield await promise;
        }
};

//* exercise 10

function promisify(functionName: Function) {
    
    return function(...args: any[]) {
        return new Promise((resolve, reject) => {
            functionName(...args, (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

console.log(promisify(getFirstArticle));
