var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL ="https://api.funtranslations.com/translate/cockney.json";

function getTranslationURL(text)
{
   return serverURL + "?" + "text=" + text;
}


function errorHandler(error)
{
   console.log("error occured");
   alert('something wrong with server! Try again later.');
}

function clickHandler(){
   

   var inputText = txtInput.value;  //taking input here

   fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
      outputDiv.innerText= json.contents.translated
    })
     
    .catch(errorHandler);    // Handles errors in case the server crashes

}
btnTranslate.addEventListener('click',clickHandler);
 