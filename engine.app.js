function   deleteElement(selector, scope=document){
  let elem = scope.querySelectorAll(selector);
  for(var aia=0; aia<elem.length; aia++){
  elem[aia]['parentNode'].removeChild(elem[aia]);   
  }
  } 
  function SmartCreate(data){
      var body = data['body']??document;
      var elementName = data['e']??'div';
      var options = data['opt']??{};
      var childElement = data['child']??''; 
      let element =  document.createElement(elementName);
      var objectData= Object.keys(options);
      for(var i=0;  i<objectData.length; i++){element[objectData[i]]=options[objectData[i]]; }
      document.querySelector(body).append(element);
      if(childElement!=''){
      childElement.forEach((item, index) => {
      let elementChild =  document.createElement(item.e);
      var objectDataChild= Object.keys(item.opt);
      for(var i=0;  i<objectDataChild.length; i++){elementChild[objectDataChild[i]]=item.opt[objectDataChild[i]]; }   
      element.append(elementChild);  
          });
      }
      }    
   function Builder(tagName,attributes, content){
        this.element = document.createElement(tagName);
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) { this.element.setAttribute(key, value);}
     }
  if (content) { this.element.innerHTML = content;}
     }
     Builder.prototype = {
get data() {
  console.log('Veriye erişildi');
  return this.element;
},
add: function (child) {
  this.element.appendChild(child.element);
  return this;
}
};
async function requestData(url,{method,query, format="json", queryJson})
 {
console.log("METHOD: "+ await method);
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  const formData = new FormData(); 
  if (query) {
    for (const [key, value] of Object.entries(query)) { 
      formData.append(key, value);
    }
    }
 if(method=="POST"){
 let headers = {};
    if (queryJson) {
        headers['X-CSRF-TOKEN'] = csrfToken;
        headers['Content-Type'] = 'application/json';
    }else{
      headers['X-CSRF-TOKEN'] = csrfToken;
    } 
return   fetch(url, {  
method: method,
body: queryJson??formData,
headers: headers,
})
.then(response => {
if (response.ok) {
  if(format=="json"){
      return response.json();
  }else{
      return response.text();
  }
} else {
  throw new Error('request error: ' + response.statusText);
}
})
.then(data => {
return data;
})
.catch(error => {
console.error('request error: ' + error);
});
     }else{
      const params = new URLSearchParams();
      if (query) {
      for (const [key, value] of Object.entries(query)) { 
          params.append(key, value);
      }} 
return fetch(url+"?"+params.toString())
.then(response => {
if (response.ok) {
  if(format=="json"){
      return response.json();
  }else{
      return response.text();
  }
} else {
  throw new Error('İstek başarısız: ' + response.statusText);
}
})
.then(data => {
return data;
})
.catch(error => {
console.error('request error: ' + error); 
});
 }
  }   
// new console view
function eprint (data){ 
console.log(data);
}
function generateRandomId(length) {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters.charAt(randomIndex);
}
return randomId;
}
function generateRandomNumericId(length) {
const numbers = '0123456789';
let randomId = '';
for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * numbers.length);
  randomId += numbers.charAt(randomIndex);
}
return randomId;
}

alert('sfsfsd');
