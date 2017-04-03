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
  buildSourcesUI(apiResonceObject.sources);
};

var buildSourcesUI = function (sources) {
  var mainDiv = document.querySelector('#main-container');
  mainDiv.innerHTML = "";
  sources.forEach(function (source) {
    var displaySource = new Source(source);
    var displayDiv = displaySource.getHtml();
    mainDiv.appendChild(displayDiv);
  });
};

var addSourceToLocalStorage = function(e){
  localStorage.setItem("selection", e.target.id);
}

var queryBuilder = function(options){
  var url = "https://newsapi.org/v1/sources?"
  var optionarr = [];
  for(key in options){
    optionarr.push([key + options[key]])
  }
  url += optionarr.join('&');
  makeRequest(url, requestComplete);
}

var app = function () {
  var options ={'apiKey=':'e95657efed9f442dad7f641e71c5024f'};
  
  var refreshButton = document.querySelector('#refresh-btn');
  var select = document.querySelectorAll('select');

  var optionsSelect = function(){
    options[event.target.name] = event.target.value;
  }

  for(input of select){
    input.addEventListener('change', optionsSelect, false);
  }

  refreshButton.onclick = function(){
    queryBuilder(options);
  }

  queryBuilder(options);
};
window.onload = app;