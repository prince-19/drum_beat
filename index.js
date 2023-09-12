// function handleClick(){
//     alert("button got clicked");
// }

// document.querySelector("button").addEventListener("click", handleClick); 


// document.querySelector("button").addEventListener("click", function (){
//     alert("button got clicked in anonymusly");
// }); 

// var numOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i=0; i<numOfDrumButtons; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         alert("I got clicked");
//     });
    
// }

// var numOfDrumButtons = document.querySelectorAll(".drum").length;
// var i = 0;
// while(i<numOfDrumButtons){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         if(this.innerHTML === "w"){
//             var audio = new Audio('sounds/crash.mp3');
//             audio.play(); 
//         }

//         if(this.innerHTML === "a"){
//             var audio = new Audio('sounds/kick-bass.mp3');
//             audio.play(); 
//         }

//         if(this.innerHTML === "s"){
//             var audio = new Audio('sounds/snare.mp3');
//             audio.play(); 
//         }

//         if(this.innerHTML === "d"){
//             var audio = new Audio('sounds/tom-1.mp3');
//             audio.play(); 
//         }
//         if(this.innerHTML === "j"){
//             var audio = new Audio('sounds/tom-2.mp3');
//             audio.play(); 
//         }

//         if(this.innerHTML === "k"){
//             var audio = new Audio('sounds/tom-3.mp3');
//             audio.play(); 
//         }

//         if(this.innerHTML === "l"){
//             var audio = new Audio('sounds/tom-4.mp3');
//             audio.play(); 
//         }
//     });
    
//     i++;
// }

// var audio = new Audio('sounds/snare.mp3');
// audio.play();

var numOfDrumButtons = document.querySelectorAll(".drum").length;
var i = 0;
while(i<numOfDrumButtons){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonInnerHTML =  this.innerHTML;
        makeSound(buttonInnerHTML);
        
    });
    
    i++;
}


//detecting keyboard press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});



function makeSound(key){
    switch(key){
        case "w":  
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
    
        case "a":  
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;

        case "s":  
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;

        case "d":  
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;

        case "j":  
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;

        case "k":  
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;

        case "l":  
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;

        default: console.log(buttonInnerHTML);
   }

}