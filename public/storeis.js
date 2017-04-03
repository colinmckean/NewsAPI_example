var makeRequest = function (url, callback) {

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var requestComplete = function () {
  if (this.status !== 200) {
    return;
  }
  var jsonString = this.responseText;
  var apiResonceObject = JSON.parse(jsonString);
  buildArticleUI(apiResonceObject.articles);
};

var buildArticleUI = function(articles){
  articles.forEach(function(article){
    var newsArticle = article;
    var displayArticle = new Article(newsArticle);
    var displayDiv = displayArticle.getHtml();
    var mainDiv = document.querySelector('#main-container');
    mainDiv.appendChild(displayDiv);
  });
};

var app = function () {
  var saved = localStorage.getItem("selection"); 
  var key = "e95657efed9f442dad7f641e71c5024f";
  makeRequest("https://newsapi.org/v1/articles?source=" + saved + "&sortBy=top&apiKey=" + key, requestComplete);
};
window.onload = app;