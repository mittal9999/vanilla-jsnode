//examine the documetn object//
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
//document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
 //document.all[10].textContent = "hello";
//  console.log(document.forms[0]);
//  console.log(document.links);

//console.log(document.images);

//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
// var headertitle = document.getElementById('header-title');
// var header =document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent ='hello';
// headertitle.innerText = 'goodbye';

// console.log(headertitle.textContent);
//headertitle.innerHTML ='<h3>hello</h3>';
//headertitle.style.borderBottom = 'solid 3px #000';

//GET ELEMENT BY CLASS NAME//
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontweight ='bold';
items[1].style.backgroundcolor = 'yellow';

// items.style.backgroundcolor ='#555';
// for(var i=0; i < items.length; i++){
//     items[i].style.backgroundcolor ='gray';

// }

//GETELEMENT BYTAGNAME
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello 2';
li[1].style.fontweight ='bold';
li[1].style.backgroundcolor = 'yellow';

//QUERYSELECTOR//

var header =document.querySelector('#main-header');
header.style.borderbottom = 'solid 4px #ccc ';

var input =document.querySelector('input');
input.value ="hello world";

var submit =document.querySelector('input[type="submit"]');
submit.value ="SEND";

var item =document.querySelector('.list-group-item');
item.style.color ='red';

var lastitem =document.querySelector('.list-group-item:last-child');
lastitem.style.color ='blue';

var seconditem =document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color ='yellow';

//QUERY SELECTORALL//

// var  titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0; i<odd.lengthi++; ){
//     odd[i].style.backgroundcolor = '#f4f4f4';
//     even[i].style.backgroundcolor = '#ccc';
// }


//TRAVERSING THE DOM//

var listitems =document.querySelector('#Items');
//parentNode
//  console.log(listitems.parentNode);
// listitems.parentNode.style.backgroundcolor ='#f4f4f4';
// console.log(listitems.parentNode.parentNode.parentNode);

//parent elemrnt
 console.log(listitems.parentElement);
 listitems.parentElement.style.backgroundColor ="#f4f4f4";
 console.log(listitems.parentElement.parentNode.parentNode);

//childNode
console.log(listitems.childNodes);
console.log(listitems.children);
console.log(listitems.children[1]);
listitems.children[1].style.backgroundcolor = 'yellow';

//firstchild
console.log(listitems.firstChild);

//firstelementchild
console.log(listitems.firstElementChild = 'hello');

//lastelementchild
console.log(listitems.lastElementChild = 'hiiii');

//nextsibling
console.log(listitems.nextSibling);

//nextelementsiblings
console.log(listitems.nextElementSibling);

//previoussiblings
console.log(listitems.previousSibling);

//previouselementsiblings
console.log(listitems.previousElementSibling);
listitems.previousElementSibling.style.color ="green";

//createelement//

//create a div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id='hello';

// add attr
newDiv.setAttribute('title','hello div');

//create text node
var newDivtext = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivtext);

var container = document.querySelector('header.container');
var h1 =document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize ='30px';
// container.insertBefore(newDiv, h1);

console.log(newDiv);


//EVENTS//

// var button =document.getElementById('button').addEventListener
// ('click',buttonclick);
   
//function buttonclick(e){
  //console.log('button click');
//document.getElementById('header-title').textContent ='changed';
//document.querySelector('main').style.backgroundColor ='#f4f4f4';
//console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output= document.getElementById('output');
// output.innerHTML ='<h3>'+e.target.id+'</h3>';

//event object
//console.log(e.type);
// console.log(e.clientx);
// console.log(e.clienty);

// console.log(e.offsetx);
// console.log(e.offsety);

// console.log(e.altkey);
// console.log(e.ctrlkey);
// console.log(e.shiftkey);

// }
var button =document.getElementById('button');
var box=document.getElementById('box');


// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

//box.addEventListener('mouseenter',runEvent);
 //box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
 //box.addEventListener('mouseout',runEvent);
 //box.addEventListener('mousemove',runEvent);

 var itemInput =document.querySelector('input[type="text"]');
 var form =document.querySelector('form');

 itemInput.addEventListener('keydown',runEvent);

function runEvent(e){
    console.log('EVENT TYPE:'+e.type);

    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';


    // output .inner= '<h3>mousex: '+e.offsetx' </h3>    <h3>mousey: '+e.offsety +'</h3>';
 //document.body.style.backgroundColor ="rgb("+e.offsetx+","+e.offsety+",40)";
}


