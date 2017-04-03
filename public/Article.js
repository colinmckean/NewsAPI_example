var Article = function(articleInfo) {
this.author = articleInfo.author;
this.description = articleInfo.description
this.publishedAt= articleInfo.publishedAt
this.title = articleInfo.title
this.url = articleInfo.url
this.urlToImage = articleInfo.urlToImage
}

Article.prototype = {
  getHtml: function(){
    var articleDiv = document.createElement('div');
    var articleDetails = document.createElement('div');
    var articleImage = document.createElement('div');
    var description = document.createElement('p');
    var author = document.createElement('p');
    var title = document.createElement('h3');
    var img = document.createElement('img');
    articleDiv.classList.add("story-div");
    title.classList.add("story-headline");
    var a = document.createElement('a');
    var published = document.createElement('time');
    var now = new Date();
    var publishDate = new Date(this.publishedAt);
    published.innerHTML = new Date(this.publishedAt);
    articleImage.classList.add("img-div");
    articleDetails.classList.add("article-details-div");
    title.innerText = this.title;
    author.innerText = this.author;
    img.src = this.urlToImage;
    img.width = "250";
    description.innerText = this.description;
    a.href = this.url;
    a.innerText ='read more';
    articleImage.appendChild(img);
    articleDetails.appendChild(title);
    articleDetails.appendChild(description);
    articleDetails.appendChild(a);
    articleDetails.appendChild(published);
    articleDetails.appendChild(author);
    articleDiv.appendChild(articleImage);
    articleDiv.appendChild(articleDetails);
    return articleDiv;
  }
};