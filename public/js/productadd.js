var price, name, type,id, input, menuItems, clothname,s,cart,priceitem,itemprice;
 var button;
var totalprice =0;
 var itemsize;
 var I_size="S";
 var imageurl;
 var quantity =1;
  var img;

var totalprice =0;
 var imagelist = [];

var onload = function(){	
	 // slideinit();
	 var userId = localStorage.getItem('user'); 
	 var user = {userId,};	 
	 document.getElementById("profileid").innerHTML = userId;	
	if(user ==="")
{

}
else
{ 
	getTotalPrice(user);
}	 
	}
function myNewFunction(sel)
    {
		quantity =sel.options[sel.selectedIndex].text;
// var ab= $('span#totalpricetitle').text(priceitem.toString());
  price = menuItems[0].price;	     
 totalprice= quantity*price;
document.getElementById("totalpricetitle").innerHTML = price;
    }
	function selectSize(sel)
    {
		I_size =sel.options[sel.selectedIndex].text;
       
    }
var menuCats = {	
    0: [
        {
            Product: 'Men Clothes',
            type: 'Light Green Shirt',
            price: 250,
			id: 0,
			quantity: input,
			totalprice: totalprice			
        }
        
    ],
    1: [
	{
         name: 'Men Clothes',
            type: 'Pink Tshirt',
            price: 500,
			id: 1,
			quantity: input,
			totalprice: totalprice    }
    ],
    2: [
         {
            name: 'Men Clothes',
            type: 'Blue Check Shirt',
            price: 1000,
			id: 2,
			quantity: input,
			totalprice: totalprice
			
	
			
        }
         
    ],
    3: [
        {
            name: 'Men Clothes',
            type: 'Red Check Shirt',
            price: 1200,
			id: 3,
			quantity: input,
			totalprice: totalprice
        }
    ]    ,
    4: [
        {
            name: 'Men Clothes',
            type: 'Red T-Shirt',
            price: 1500,
			id: 4,
			quantity: input,
			totalprice: totalprice
        }
         
    ],
    5: [
        {  name: 'Men Clothes',
            type: 'Red-check Shirt',
            price: 2200,
			id: 5,
			quantity: input,
			totalprice: totalprice
        }
    ],
	6: [
        {  name: 'Men Clothes',
            type: 'Red&white Shirt',
            price: 2700,
			id: 6,
			quantity: input,
			totalprice: totalprice
        }
    ],
	7: [
        {  name: 'Men Clothes',
            type: 'Light Blue Shirt',
            price: 3000,
			id: 7,
			quantity: input,
			totalprice: totalprice
        }
    ],
	8: [
        {  name: 'Men Clothes',
            type: 'Light GreenShirt',
            price: 1500,
			id: 8,
			quantity: input,
			totalprice: totalprice
        }
    ]
};
var add = function()
{	
	
	// quantity = document.getElementById('noofitems').value;	
	price = menuItems[0].price;	
	var itemno = parseInt(quantity);
    itemprice = parseInt(price);
	priceitem = itemno*itemprice;
	s = localStorage.getItem('user');
	var user ={s,};		
	// getTotalPrice(user);
	var	db_price = localStorage.getItem('local_totP');
	var	db_price = localStorage.getItem('local_totP');
	db_price = parseInt(db_price);
	// if(totalprice == null)
	// {
		// totalprice = 0;
	// }
	// isNaN(totalprice);
	totalprice = priceitem+ db_price;	
	localStorage.setItem('local_totP',totalprice);	 
	menuItems[0].quantity = quantity;	
	menuItems[0].totalprice = priceitem;	
	menuItems[0].itemsize = I_size;	
	imageurl = menuItems[0].imageurl;
	Product = menuItems[0].Product;
	$('span#totalpricetitle').text(priceitem.toString());		
	$('span#simpleCart_total').text(totalprice.toString());	
	cart={
		id, Product , type, quantity,  itemprice,  priceitem, totalprice,s,imageurl// arrayobject to store properties of product items
		};	
	 storeLogsUsingAjax(cart,totalprice);
	

}


var getTotalPrice = function (cownNumber) {// search for the items of selected cowid from mongodb
    var logs;
	var usv;
    var ajax = $.ajax({
        url: "http://localhost:3000/userData/",
        type: "POST",
		dataType: "json",
        data: {"list": cownNumber}//data send to nodeserver
        
    });

    ajax.success(function (response) {
        if (response.result == true) {  
           logs = response.data;
		   if(logs.length==0)
		   {
			   totalprice = 0;
			   localStorage.setItem('local_totP',totalprice);
			   totalprice = localStorage.getItem('local_totP');    
				$('span#simpleCart_total').text(totalprice.toString());				  
			   
		   }
		   else
		   {	var totprice =0;				  
			   var size = logs.length;
			   for(var i=0;i<logs.length;i++)
			   {
				   totprice = parseInt(logs[i].priceitem)+totprice;	
			   }
			   usv = localStorage.getItem('user');
			    localStorage.setItem('local_totP',totprice);
				 totalprice = localStorage.getItem('local_totP'); 
				 totalprice ='$'+ totalprice.toString() ;
				  $('span#simpleCart_total').text(totalprice);	
if(usv==="")
{
totalprice =0;
}
else
{
	totalprice = localStorage.getItem('local_totP');
}    
	$('span#simpleCart_total').text(totalprice.toString());	
		   }

		 
        }
    });


    ajax.fail(function (errorResponse) {
        console.log(errorResponse);
    });
				   
			
	
}

var storeLogsUsingAjax = function (newItem,totalprice) {//saving the dataitems of userinput in mongodb
    var ajax = $.ajax({
        url: "http://localhost:3000/users",
        type: "POST",
        dataType: "json",
        data: {"logs": newItem}//data send to nodeserver
    });

    ajax.success(function (response) {

        if (response.result == true) {
			localStorage.setItem('local_totP',totalprice);
            alert('Items Added on your Cart');
            // clearing the items from local storage after storing in mongodb
        }
        console.log(response);
    });
   
};

var getFromMongo = function (cownNumber) {// search for the items of selected cowid from mongodb
    var logs;
    var ajax = $.ajax({
        url: "http://localhost:3000/userData/",
        type: "POST",
		dataType: "json",
        data: {"list": cownNumber}//data send to nodeserver
        
    });

    ajax.success(function (response) {
        if (response.result == true) {  
           logs = response.data;
           // Javascript:addTable(logs);
		   addTable(logs);
        }
    });

    ajax.fail(function (errorResponse) {
        console.log(errorResponse);
    });
	
}
function profileMenu() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
	// document.getElementById("logoutbtn").style.display = 'block';	
	 // $('span#profileid').text('');
	
}
function signout() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
	
	localStorage.setItem('user','');
	var a = localStorage.getItem('user');
	 $('span#profileid').text(a);
		
	
}
function showDiv1(){
    document.getElementById("checkout").style.display = 'block';
	// document.getElementById("menb").style.display = 'none';
	// document.getElementById("con").style.display = 'none';
	 $("#product").addClass("hide"); 
	 $("#contenthome").addClass("hide");
	 $("#design-cast").addClass("hide"); 
	 $("#gallery_id1").addClass("hide"); 
	 // $("#checkout").addClass("hide"); 
	 $("#menb").addClass("hide"); 
	 
	 
	 $("#con").addClass("hide"); 
	var userId = localStorage.getItem('user');
	var find = { userId,};	
	var logs = getFromMongo(find);
	
}
function remove(){
	$('.cart-header').fadeOut('slow', function(c){
		$('.cart-header').remove();
	});
}
			  
function addTable(logs) {
     
    var myTableDiv = document.getElementById("myDynamicTable");
     
    var table = document.createElement('TABLE');
    table.border='1';
   
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
	// var addBtn = document.getElementById('add-btn');
	var addBtn = document.createElement('button');
	
	 var array = ["Item","ID", "Name", "Type","Price/Item","Quantity","Total Price","Remove"];	  
	 if(logs)
	 {	
		for (var i=0; i<= logs.length; i++){
			// img = document.createElement('img');	 		   		 
		   // var url =  "images/menclothes/mc9.jpeg";		  
		   // imagelist.push(url);
		   // img.src = imagelist[i];
		   // img.src = logs[i].imageurl;
		var a = localStorage.length;
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);	 
       for (var j=0; j<8; j++){
		    var td = document.createElement('TD');
           td.width='75';
		   if(i==0)
		   {
			    td.appendChild(document.createTextNode(array[j]));
		   }
		  
		   
		   else if(j==0)
		   {	 
			img = document.createElement('img');	   		 
		   
		   img.src = logs[i-1].imageurl;
				td.appendChild(img);
		   }
		   else if(j!=7 && j!=0){
			   var k = i-1;				
				var newarray = [logs[k].id, logs[k].Product, logs[k].type, logs[k].itemprice, logs[k].quantity, logs[k].priceitem]		        
				  button =  document.createElement("button");
				  button.innerHTML = "Remove";						
				  button.className = 'hvr-skew-backward ';					
			      td.appendChild(document.createTextNode(newarray[j-1]));			 
					
		   }
		   
		   else if (j==7)
		   {
			    td.appendChild(button);
				button.addEventListener ("click", function(event) {
				var rowindex = $(this).closest('tr').index()-1;		
				var Cells =table.rows[rowindex+1].cells[1].innerHTML;
						$(this).closest('tr').remove();
				 edit_row(Cells);	
				});
			   
		   }
		   else{}
						
		             tr.appendChild(td);
					 
       }
	   }
	 }
    myTableDiv.appendChild(table);
   
}
function dopay()
{
	document.getElementById('simplify-payment-form').style.display = "block";	
	alert('pay');
}
function edit_row(cownNumber)
{
	var userId = localStorage.getItem('user');
	  var a ={cownNumber,userId,};			 
      var ajax = $.ajax({
        url: "http://localhost:3000/deleteData/",
        type: "POST",
		dataType: "json",
        data: {"list": a}//data send to nodeserver        
    });    
	onload();
	
}
