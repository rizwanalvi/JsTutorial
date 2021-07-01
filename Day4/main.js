let btnClick = document.getElementById('btnClick');
btnClick.addEventListener("click",function(){
this.setAttribute("class",'bg-warning');
this.value =

"X";
}); 

let li = document.getElementsByName('li');
li.addEventListener("click",function(){
    alert();
});