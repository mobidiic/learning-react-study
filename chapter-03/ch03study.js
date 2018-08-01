// 비동기식 처리 모델은 처리 완료를 기다리지 않고 즉시 다음 태스크를 실행한다.
// 따라서 비동기 함수 내에서 처리 결과를 반환(또는 전역 변수에의 할당)하면
// 기대한 대로 동작하지 않는다.
// 비동기 함수의 결과에 대한 처리는 함수 내에서 처리해야 한다.
// // Promise 객체의 생성
// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업을 수행한다.
//
//   if (/* 비동기 작업 수행 성공 */) {
//     resolve('result');
//   }
//   else { /* 비동기 작업 수행 실패 */
//     reject('failure reason');
//   }
// });

var log = function(mes){
  console.log(mes);
};

const log = mes => console.log(mes);


const string = "this is the middy show woth Cheryl Waters";
const urlFriendly = string.replace(/ /g, "-");

console.log(urlFriendly);


var target=document.getElementById('target'),
wrapper = document.createElement('div'),
headline = document.createElement('h1');

wrapper.id= "welcome";
headline.innerHTML= "hello";

wrapper.appendChild(headline);
target.appendChild(wrapper);


const {render} = ReactDOM;
const Welcome = () => (
  <div id = "welcome">
    <h1> hello World </h1>
  </div>
)

render(
  <Welcome />,
  document.getElementById('target');
)


//immutatble
let color_lawn ={
  title: "weed",
  color : "#00ff00",
  rating: 0
};

function rateColor(color, rating){
  color.rating = rating
  return color;
}

console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating)

var rateColor = function(color, rating){
  return Object.assign({}, color, {rating:rating});
}


let colorArray = [{title: 'red'}, {title: 'blue'}];
var addColor = function(title, color){
  color.push({title: title});
  return color;
}

var addColor = (title, color) => color.concat({title})
//이게 불변성
const addColor = (title, color) => [...color, {title}];
//최신버전, 새로운 배열에 컬러값들 복사, 새값을 추가. 불변성


//스프레드 연산자
var peaks=['대청봉', '소청봉'];
var [last] = peaks.reverse(); //이러면 소청봉이 되지만 원본이 변한다.
var [last] = [...peaks].reverse();
console.log(last);

var lakes = ['대청호', '경포호', '화진포'];
var [first, ...last]= lakes //디스트럭쳐링 구문

function directions(...args){
  var [start, ...remaining] = args,
  [finish, ...stops]= remaining.reverse();

  console.log(`${args.length}도시를 운행`);
  console.log(`${start}에서 출발`);
  console.log(`${finish}가 목적지`);
  console.log(`${stops.length}개 도시 경유`);
}

Object.freeze(lakes); //메소드, 속성 사용 불가. 근데 왜 추가는 되지?
lakes += ['소청호']; //이건 왜 돼냐
lakes = ['중청호']; //이것도 됨. 덮어쓰기는 되는듯. 변경은 안되고


//순수함수
var frederick = {
  name : "frederik Douglass",
  canRead : false,
  canWrite : false
};

const selfEducate = person => ({
  ...person,
  canRead : true,
  canWrite : true
});
//프레데릭이 불변하게.


function Header(text){
  let h1 = document.createElement('h1');
  h1.innerHTML = text;
  document.body.appendChild(h1);
}
//순수하지 않다. DOM 변경의 sideEffect를 얻기 때문

//리액트의 순수함수로
const Header = (props)=> <h1>{props.title}</h1>




const schools = ['Waton', 'Pensil', 'Havard', 'Brown'];
schools.join(', ')
const WSchools = schools.filter(school => school[0]==="W");
console.log(WSchools)



const schools = ['경복고', '세화고', '반포고', '남현초'];
const highSchools = schools.filter(school => school[school.length-1]==="고");
console.log(highSchools)


const cutSchool = (cut, list)=> list.filter(school =>  school!==cut);


const hiSchools = schools.map(school => `${school} High School`)
console.log(hiSchools.join('\n'));


const highSchools = schools.map(school => ({name: school}));


var schools =[
  {name : 'YorkTown'},
  {name : 'Happymeal'},
  {name : 'McDonald'}
];

var updatedSchools = editName("Happymeal", "HBW", schools);

var editName = (oldName, name, arr) => arr.map(item => {
  if (item.name === oldName){
    return {...item, name};
  }else {
    return item;
  }
});


var editName = (oldName, name, arr) => arr.map(item.name==oldName? {...item, name} : item);
//에딧네임함수를 뒤에 선언하면 안돌아감! 비동기 너무 빠르게 진행됬나봄.

console.log(updatedSchools);
console.log(schools);



//객체를 배열로
var schools ={
  "YorkTown" : 10,
  "Washington" : 2,
  "WakeField" : 5
};

var schoolArray = Object.keys(schools).map(key => ({name : key, wins: schools[key]}));
console.log(schoolArray);



//배열을 다른 타입으로
var ages = [21,18,42,40,52,61,23,34];

var maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age>max}`);
  return (age>max)? age : max
}, 0)

console.log('maxAge', maxAge)


//배열을 객체로
var colors = [
  { id: '-xekare',
    title : 'red',
    rating : 3},
  { id: '-jbsod',
    title : 'greed',
    rating: 5},
  { id: '-scnjdl',
    title : 'blue',
    rating : 1}
];

var hashColors = colors.reduce((hash, {id, title, rating})=> {hash[id]= {title, rating}
return hash}, {});
//왜 리턴을 다음줄에 써야 하는가?

console.log(hashColors);


//배열을 다른 배열로

var colors= ['red', 'green', 'blue', 'red', 'green'];

var distinctColors = colors.reduce(
  (distinct, color) => (distinct.indexOf(color)!== -1)? distinct : [...distinct, color], [] );

console.log(distinctColors);



//커링함수 예제

const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload =() =>
      (request.status === 200) ?
      resolves(JSON.parse(request.response).results) :
      reject(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
  })


var userLogs = userName => message => console.log(`${userName} -> ${message}`);
var log = userLogs("mobidiic");
log("attempted to load 20 fake members");
getFakeMembers(20).then(
  members => log(`successfully loaded ${members.length} members`),
  error => log('encountered an error')
)



//재귀함수

var countdown = (value, fn, delay=1000) => {
  fn(value)
  return (value>0) ? setTimeout(()=> countdown(value-1, fn), delay) : value;
}

var log = value => console.log(value);

countdown(10, log);



const dan = {
  type : "person",
  data : {
    gender : "male",
    info : {
      id : 22,
      fullname : {
        first : "Dan",
        last : "Deacon"
      }
    }
  }
}

const deepPick = (fields, object={}) => {
  const [first, ...remaining] = fields.split(".")
  return (remaining.length) ?
      deepPick(remaining.join("."), object[first]) :
      object[first]
}

console.log( deepPick("data.info.fullname.first", dan) );



//합성 - chaining

var template = "hh:mm:ss"
var dtime = new Date();
var clockTime = template.replace("hh", dtime.getHours()).replace("mm", dtime.getMinutes()).replace("ss", dtime.getSeconds())
clockTime;


var both = compose(civilianHours, appendAMPM);

const compose = (...fns) => (arg) => fns.reduce( (composed, f)=> f(composed), arg )
//어렵다 이거


//선언적으로 시계 만들기

const oneSecond = () => 1000
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const abstractClockTime = date => ({
  hours : date.getHours(),
  minutes : date.getMinutes(),
  seconds : date.getSeconds()
})

const civilianHours = clockTime =>({
  ...clockTime,
  hours : (clockTime.hours>12) ? (clockTime.hours-12) : clockTime.hours
})

const appendAMPM = clockTime => ({
  ...clockTime,
  ampm : (clockTime.hours>12) ? "PM" : "AM"
})

const display = target => time => target(time)

const formatClock = format => time =>
  format.replace("hh", time.hours).replace("mm", time.minutes).replace("ss", time.seconds).replace('tt', time.ampm)

const prependZero = key => clockTime => ({
  ...clockTime,
  [key] : (clockTime[key]<10) ? "0"+clockTime[key] : clockTime[key]
})

const convertToCivilianTime = clockTime => compose(appendAMPM, civilianHours)(clockTime)

const doubleDigit = civilianTime => compose(prependZero("hours"), prependZero("minutes"), prependZero("seconds"))(civilianTime)

const startTicking = () => setInterval(compose(
  clear, getCurrentTime, abstractClockTime, convertToCivilianTime, doubleDigit, formatClock("hh:mm:ss tt"), display(log)
), oneSecond())


startTicking();
