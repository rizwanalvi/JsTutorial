setInterval(function(){
    let num = Math.floor(Math.random()*4);
    
    let h1 = document.getElementById('h1');
    
if(num == 0 )
{
// document.body.style.backgroundColor = 'gold'
document.body.style.backgroundImage = 'url(./img/ph1.jpg)';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = "center";
h1.textContent = 'JAVASCRIPT';

}
else if(num==1){
document.body.style.backgroundColor = 'blue'
document.body.style.backgroundImage = 'url(./img/ph01.jpg)';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = "center";
h1.textContent = 'OUT OF THE BOX';
}
else if(num==2){
document.body.style.backgroundColor = 'green'
document.body.style.backgroundImage = 'url(./img/ph02.jpg)';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = "center";
h1.textContent = 'NEW HORIZON';
}

else if(num==3){
document.body.style.backgroundColor = 'red'
document.body.style.backgroundImage = 'url(./img/ph03.jpg)';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = "center";
}
},3000)

// let num =10;
// let h1 = document.getElementById('h1');
//   if(num => 10){
//       h1.textContent = "more than 10";
//   }  
//   else{
//     h1.textContent = "less than 10";
//   }