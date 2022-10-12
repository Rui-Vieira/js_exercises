/*
https://hn.algolia.com/api
exercício 1: escrever uma função getFirstArticle que retorna uma Promise para os detalhes da primeira notícia
exercício 2: escrever uma função getPoints que retorna uma Promise para o somatório de todos os pontos em uma página
exercício 3: escrever uma função get40news que obrigatoriamente faz dois fetches e retorna uma Promise para um array de notícias.[[hits1][hits2]] =>[0,1,2,3,...,20,21,22...,38,39]

exercício 4: escrever uma função getFullArticles que retorna uma Promise para um array com os detalhes de cada notícia.*/


// fetch url from the json?


function getFirstArticle() {
    return fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story')
        .then(response => response.json()
            .then(data => data.hits[0]))
            .then(data => fetch(`http://hn.algolia.com/api/v1/items/${data.objectID}`)
                .then(response => response.json()))
                .then(data => data)
                .then(data => console.log(data))
                //.then(data => data.map(url)) //! trying to get the url from the json?
                //.then(url => console.log(url))
                .catch(error => console.log(error))
}
             

getFirstArticle();


//console.log(getFirstArticle())

/*

function getPoints() {
    return fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story')
        .then(response => response.json())
        .then(json => json.hits)
        .then(articles => articles.map(article => article.points))
        .then(points => points.reduce((acc, point) => acc + point))
        .then(points => console.log(points))
}

getPoints();
*/
/*

function get40newsArray() {


    return fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story')
    .then(response => response.json())
    .then(json => json.hits)
    .then(articles => articles.map(article => article.title))
    .then(title => title.slice(0, 20))
    .then(title=> console.log(title))

    .then(fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story&page=2')
    .then(response => response.json())
    .then(json => json.hits)
    .then(articles => articles.map(article => article.title))
    .then(title => title.slice(0, 20))
    .then(title=> console.log(title)))

    .catch(error => console.log(error))



}
get40newsArray()
*/
   
/*

function getFullArticles() {
    
    return fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story')

        .then(response => response.json())
        .then(json => json.hits)
        .then(articles => articles.map(article => article.objectID))
        .then(ids => Promise.all(ids.map(id => fetch(`http://hn.algolia.com/api/v1/items/${id}`))))
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(articles => console.log(articles))

        .catch(error => console.log(error))
}


getFullArticles();

*/