let  Book ={
    "isbn":123456,
    "title":"Introduction to Computer Science Using Python",
    "price":234.05,
    "img":'img/p1.webp',
    "desc":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, unde beatae! Laboriosam unde praesentium facere tenetur sapiente, at minima recusandae sunt, quod assumenda, vel accusamus error nihil corrupti iusto ipsum."
    ,ShowTitle : function(){
        return this.title;
    },
    ShowImg:function(){
        return this.img
    },
    ShowPrice:function(){
        return this.price
    },
    ShowISBN:function(){
        return this.isbn
    },
    ShowDesc:function(){
        return this.desc
    }

}

let h1 = document.querySelector('h1');
let img = document.querySelector('img');
let h3 = document.querySelectorAll('h3');
let p = document.querySelector('p');
h1.innerHTML = Book.ShowTitle();
img.setAttribute('src',Book.ShowImg())
h3[0].innerHTML = Book.ShowPrice()
h3[1].innerHTML = Book.ShowISBN()
p.innerHTML = Book.ShowDesc()