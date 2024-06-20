//alert("hello");
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick)
function handleClick()  // addEventListener(type,function )
{
   var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3"); 
           audio.play();
            break;
         case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
            case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
            case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
            case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
            case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
            case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            default:console.log(buttonInnerHTML); 
            break;
      }
}
function buttonAnimation (currentKey){
var activeButton= document.querySelector("."+ currentKey);
activeButton.classList.add("pressed");
setTimeout(function() {
activeButton.classList.remove("pressed");}
,100);
}


 
//other method 
// document.querySelector.addEventListener("click" ,
//document.queryselector("button").addEventListner("click ,handleClick");
// function handleClick( )
// {
//     alert("i gotc licked");
// })
//here click is type of event i.e first parameter and second we need to give a js function then will run

// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("i got clicked");
       //this.style.color="white";//this propery give the identity  
//     });
// }
