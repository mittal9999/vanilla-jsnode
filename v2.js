var form=document.getElementById('addform');
var  itemlist=document.getElementById('Items');
var filter =document.getElementById('filter');
//form submit events
form.addEventListener('submit',additem);

//delete event
itemlist.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filterItems);

//add item

function additem(e){
  e.preventDefault();
 // console.log(1);

  //get input value
  var newItem =document.getElementById('item').value;

  //create new li element
  var li=document.createElement('li');

  //add class
  li.className ='list-group-item';
  

  //add text node with input value
  li.appendChild(document.createTextNode(newItem));
  
  //create del button element
  var deletebtn = document.createElement('button');

  //add classes to del button
  deletebtn.className ='btn btn-dark btn-block ';

  //append text  node
  deletebtn.appendChild(document.createTextNode('x'));

  //append button li
  li.appendChild(deletebtn);

//append button to list
  itemlist.appendChild(li);
 
}

//remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
  if(confirm('are you sure?')){
      var li =e.target.parentElement;
      itemlist.removeChild(li);
  }
}
}
//filter items

function filterItems(e){
    //converts text to lowercase
    var text =e.target.value.toLowerCase();
   
    //get list
    var items =itemlist.getElementsByTagName('li');
    //console.log(items);

    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName =item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
           item.style.display ='block';
        }else {
            item.style.display ="none";
        }
    });
}