

const BASE_URL = 'https://api.github.com/users/arcadephoto';

//the following functions work. they take the data from fetch then store
// it as a variable called testData. Then the sortTest function takes the "updated_at"
// field from the array, then sorts it in reverse chronological order. I don't know
// what to do with it from there.

// var now = moment();
let datearray = [];
let testData;
let showTime;
let getTime;

function sortTest(){
  for(let i = 0; i < testData.repos.length; i++){
    datearray.push(testData.repos[i].updated_at);
  }
}





const generateHTML = (data) => {
  // console.log(data);
  const source = document.getElementById("gitInformation").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.querySelector('.bio').innerHTML = html;

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
  const source = document.getElementById("repos").innerHTML;
  const template = Handlebars.compile(source);
  const context = {
    repos: data.repos.sort((a, b) => b.id - a.id)
  };
  const html = template(context);
  document.querySelector('.repos').innerHTML = html;
  // getTime = document.getElementById("dateTime").innerHTML;
  // showTime = moment(getTime).fromNow();
  // document.querySelector('.dateTime').innerHTML = showTime;
  // testData = data;
}

// function doTime(){
// getTime = document.getElementById("dateTime").innerHTML;
// showTime = moment(getTime).fromNow();
// document.querySelector('.dateTime').innerHTML = showTime;
// }

fetch(`${BASE_URL}`)
.then(response => response.json())
.then(data => generateHTML(data));



fetch(`${BASE_URL}/orgs`)
.then(response => response.json())
.then(data => getOrg({orgs:data}));


fetch(`${BASE_URL}/repos`)
.then(response => response.json())
.then(data => repos({repos:data}));




//trying to use Moment js to convert the date field from Github to
//"<hours> hours ago" format
// const getTime = document.getElementById("dateTime").innerHTML;
// const showTime = moment(getTime).fromNow();
// console.log(getTime);
// console.log(showTime);
