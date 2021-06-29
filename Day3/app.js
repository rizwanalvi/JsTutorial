let txtValue = document.getElementById("txtValue");
let resultdiv = document.getElementById("resultdiv");
let a =0;
let r=0;
const PI =22/7;
txtValue.addEventListener("change",function(){
r =txtValue.value;
a = PI * r*r;
    resultdiv.textContent = a;
     //resultdiv.innerHTML = a;

});
