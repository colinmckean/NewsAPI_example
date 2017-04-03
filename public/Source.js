var Source = function (sourceInfo) {
  this.id = sourceInfo.id;
  this.name = sourceInfo.name;
  this.logo = sourceInfo.urlsToLogos.small;
  this.description = sourceInfo.description;
};

Source.prototype = {
  getHtml: function(){
    var imgDiv = document.createElement('div');
    var img = document.createElement('img');
    var a = document.createElement('a');
    a.setAttribute("href","articles.html");
    a.addEventListener('click', addSourceToLocalStorage, false);
    imgDiv.classList.add("source_img");
    img.id = this.id;
    img.src = this.logo;
    img.title = this.name;
    img.alt = this.description;
    a.appendChild(img);
    imgDiv.appendChild(a);
    return imgDiv;
  }
};