const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick= function(){
    let insideTheInput = input.value;
       input.value = " ";
     
  
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const button2 = document.createElement('button');
  
  listItem.append(span);
  span.innerText = insideTheInput;
  listItem.append(button2);
  button2.innerText='Delete';
  list.append(listItem);

  button2.onclick = function(e){
    list.removeChild(listItem)
}
input.focus();

}