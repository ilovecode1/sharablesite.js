//Sharablesite API v1.0.0

function doesFileExist(urlToFile)
{
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}

function findLogo(logo) {
  
  var result = doesFileExist("http://cosmicsearch.org/shareablesite/icons/PNG/sharablesite/" + logo + ".png");
 
  if (result === true) {
      return "http://cosmicsearch.org/shareablesite/icons/PNG/sharablesite/" + logo + ".png";
  } else {
      return "404 Error!";
  }
    
}
