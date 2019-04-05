let url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=af311d8be0e743038c57a94dd7261159';

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let results = data.articles;
    let hackerNews = document.createElement("ul");
    let body = document.querySelector("#news");
    body.appendChild(hackerNews);
    results.map(articles => {
      let articlesItem = document.createElement("li");
      articlesItem.innerHTML =
        '<a href="' + articles.url + '">' + articles.title + "</a>";
      hackerNews.appendChild(articlesItem);
    });
  })
  .catch(error => {
    console.log(`An error occurred: ${error}`);
  });

let url2 = 'https://api.openweathermap.org/data/2.5/weather?zip=55057,us&units=imperial' +
           '&appid=d67bd38e38acf0e9316e0c79ea52994f';
fetch(url2)
   .then(response => {
     return response.json();
   })
   .then(data => {
     let results = data.weather;
     let weatherNews = document.createElement("ul");
     let body = document.querySelector("#weather");
     body.appendChild(weatherNews);
     results.map(weather => {
       let articlesItem = document.createElement("div");
       articlesItem.innerHTML =
         '<p>' + weather.main + ', ' + weather.description + "</p>";
       weatherNews.appendChild(articlesItem);
     });
   })
   .catch(error => {
     console.log(`An error occurred: ${error}`);
   });
