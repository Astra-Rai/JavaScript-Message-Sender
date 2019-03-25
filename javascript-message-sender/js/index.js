
//variable that targets button, button element has id = 'sendBtn'
const sendBtn = document.querySelector('#sendBtn');
//variable that targets input element with id = 'messageIn'
const messageIn = document.querySelector('#messageIn');
//variable that targets paragraph element with id = 'messageOut'
const messageOut = document.querySelector('#messageOut');
//when button with id ="sendBtn" is clicked....
//run sendMsg function
sendBtn.addEventListener('click', sendMsg)
//sendMsg function
function sendMsg(){
  //coolect value of messageIn 
  //variable content will hold the value entered in input field
  //input field has an id = "messageIn"  
  let content = messageIn.value;
  //console.log(content);
  //if the input field is empty and button is clicked...
  if(content === '') {
    //send an alert message 
    //instruct user to enter text    
    alert('Please enter text. Current Value is Empty');
    
    } else {
    //if the input field has text and user clicks button  //output message     entered in input field
    //<p id = "messageOut">innerHTML is content from input field
    //remember ...
    //pass input value 
     //place vaue input in message out 
    messageOut.innerHTML= content;
    //input field is empty once button is clicked  
    messageIn.value = '';
  }  
}