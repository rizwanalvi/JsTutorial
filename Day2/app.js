     let lstfruit =document.getElementById("lstfruit");
        lstfruit.addEventListener("click",function(){
            alert(this.value);
        });
        
      let colorpick = document.getElementById("colorpick"); 
     colorpick.addEventListener("change",function(){
        document.body.style.backgroundColor =this.value;
            //  alert(colorpick.value);
     });
   let num =0;
     let txtData = document.getElementById("txtData");
     txtData.addEventListener("change",function(){
              alert( this.value); 
            
     });
   



   
     //  let txtData = document.getElementById("txtData");

    //  txtData.addEventListener("change",function(){
    //         alert('textbox click');
    //  });
     
        // let productname = "Milk Pack";
        // let quantity = 0;
        // let price = 23.5;
        // let totalprice = 0;
        // // quantity = prompt("Enter Number of items");
        // totalprice = quantity * price;
        // document.write(totalprice);