let Objs = [{"id":1,"name":"Noman","sem":"CPISM"},
{"id":2,"name":"Salman","sem":"CPISM"},
{"id":3,"name":"Farhan","sem":"DISM"},
{"id":4,"name":"Rehan","sem":"CPISM"}]
console.log(Objs);
console.log(Objs[1].name)
for(let i=0;i<Objs.length;i++){
//document.write(Objs[i].sem)
}
let Myh1 = function (msg){
    let h1 = document.createElement('h1');
h1.innerHTML = msg;
document.body.appendChild(h1);
}
let h1 = document.createElement('h1');
h1.innerHTML = "JavaScript Element";
document.body.appendChild(h1);
let h2 = document.createElement('h2');
h2.innerHTML = 'javascript element h2';
// document.body.appendChild(h2);
let div = document.querySelector('div');
div.appendChild(h2)
Myh1("Hello!")
Myh1("Hello Pakistan!")
Myh1("Understand")

