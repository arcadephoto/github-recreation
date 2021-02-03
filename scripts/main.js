(function() {

  'use strict';

const BASE_URL = 'https://api.github.com/users/arcadephoto';

// let profileData = {
//
// };









const generateHTML = (data) => {
  // console.log('data', data);
  const source = document.getElementById("gitInformation").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  // console.log("html", html);
  document.querySelector('.bio').innerHTML = html;
  // profileData.name = data.name;
}

const getOrg = (data) => {
  // console.log(data);
  const source = document.getElementById("getOrg").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  // console.log("html", html);
  document.querySelector('.orgs').innerHTML = html;
  // profileData.name = data.name;
}

const repos = (data) => {
  // console.log(data);
  const source = document.getElementById("repos").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  // console.log("html", html);
  document.querySelector('.repos').innerHTML = html;
  // profileData.name = data.name;
}



fetch(`${BASE_URL}`, {
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
})
.then(response => response.json())
.then(data => generateHTML(data));



fetch(`${BASE_URL}/orgs`)
.then(response => response.json())
.then(data => getOrg({orgs:data}));


fetch(`${BASE_URL}/repos`)
.then(response => response.json())
.then(data => repos({repos:data}));


const timeStuff = "test string";
// document.getElementById('timeMoment').innerHTML = timeStuff;
const getTime = moment().startOf('day').fromNow();
console.log(getTime);


})();
