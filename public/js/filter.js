var filterbag = function(pid)
{
	var typeid = pid.id;
	localStorage.setItem('producttype',typeid);
	var pGen = localStorage.getItem('prodArea');
	initcheckbox(pGen);
		var name;
if(pGen == 'Women')
{
	if(typeid == 'WBag'){document.getElementById('WomenBag').style.display = 'block'; document.getElementById('WBag').checked = true;}
	if(typeid == 'WClothes'){document.getElementById('WomenClothes').style.display = 'block' ;document.getElementById('WClothes').checked = true;}
	if(typeid == 'WShoe'){document.getElementById('WomenShoe').style.display = 'block';document.getElementById('WShoe').checked = true;}
}	
if(pGen == 'Men')
{
	if(typeid == 'MBag'){document.getElementById('MenBag').style.display = 'block';	document.getElementById('MBag').checked = true;}
	if(typeid == 'MClothes'){document.getElementById('MenClothes').style.display = 'block';  document.getElementById('MClothes').checked = true;}
	if(typeid == 'MShoe'){document.getElementById('MenShoe').style.display = 'block'; document.getElementById('MShoe').checked = true;}
}	
if(pGen == 'Kids')
{
	if(typeid == 'KBag'){document.getElementById('KidBag').style.display = 'block'; document.getElementById('KBag').checked = true;}
	if(typeid == 'KClothes'){document.getElementById('KidClothes').style.display = 'block' ;document.getElementById('KClothes').checked = true;}
	if(typeid == 'KShoe'){document.getElementById('KidShoes').style.display = 'block';document.getElementById('KShoe').checked = true;}
}	
}

function initcheckbox(pGen){
	if(pGen=='Men')
	{
	 document.getElementById('MClothes').checked = false;
	 document.getElementById('MShoe').checked = false;
	 document.getElementById('MBag').checked = false;
	 document.getElementById('MenClothes').style.display = 'none';
	 document.getElementById('MenBag').style.display = 'none';
	 document.getElementById('MenShoe').style.display = 'none'; 
	}
	if(pGen=='Women')
	{
	 document.getElementById('WClothes').checked = false;
	 document.getElementById('WShoe').checked = false;
	 document.getElementById('WBag').checked = false; 	 
	 document.getElementById('WomenClothes').style.display = 'none';
	 document.getElementById('WomenShoe').style.display = 'none';
	 document.getElementById('WomenBag').style.display = 'none';
	}
	if(pGen=='Kids')
	{
	 document.getElementById('KClothes').checked = false;
	 document.getElementById('KShoe').checked = false;
	 document.getElementById('KBag').checked = false; 	 
	 document.getElementById('KidClothes').style.display = 'none';
	 document.getElementById('KidShoes').style.display = 'none';
	 document.getElementById('KidBag').style.display = 'none';
	}
	
	document.getElementById('1000').checked = false;
	document.getElementById('1500').checked = false;
	document.getElementById('2000').checked = false;
	document.getElementById('500').checked = false;
	
}
function deselectbox(price)
{
	document.getElementById('1000').checked = false;
	document.getElementById('1500').checked = false;
	document.getElementById('2000').checked = false;
	document.getElementById('500').checked = false;
	document.getElementById(price).checked = true;
	
}
var filter = function(pr)
{	
	var pGen = localStorage.getItem('prodArea');
	var pType = localStorage.getItem('producttype');
	if(pGen == 'Women')
	{
		if (pType ==  'WBag'){name = 'Women Bag';}
		if (pType ==  'WClothes'){name = 'Women Clothes';}
		if (pType ==  'WShoe'){name = 'Women Shoe';}
	}
	
	if(pGen == 'Men')
	{
		if (pType ==  'MBag'){name = 'Men Bag';}
		if (pType ==  'MClothes'){name = 'Men Clothes';}
		if (pType ==  'MShoe'){name = 'Men Shoe';}
	}
	if(pGen == 'Kids')
	{
		if (pType ==  'KBag'){name = 'Kids Bag';}
		if (pType ==  'KClothes'){name = 'Kids Clothes';}
		if (pType ==  'KShoe'){name = 'Kids Shoe';}
	}
	
	var productname ={name,pGen,};
	var price = parseInt(pr.id);	
	deselectbox(price);
	if(price == 500)
	{
		var p1 = 0;
		var p2 = 500;		
	}
	if(price == 1000)
	{
		var p1 = 500;
		var p2 = 1000;		
	}
	if(price == 1500)
	{
		var p1 = 1000;
		var p2 = 1500;		
	}
	if(price == 2000)
	{
		var p1 = 1500;
		var p2 = 4000;		
	}
	var priceRange = {p1,p2};	
	getBagMongo(productname,priceRange);
	
}

var getBagMongo = function (productname,priceRange) {// search for the items of selected cowid from mongodb
    var logs;
    var ajax = $.ajax({
        url: "http://localhost:3000/BagMongo/",
        type: "POST",
		dataType: "json",
        data: {"list": productname}//data send to nodeserver
        
    });

    ajax.success(function (response) {
        if (response.result == true) {  
           logs = response.data;
		   showBag(logs,priceRange);
          
        }
    });

    ajax.fail(function (errorResponse) {
        console.log(errorResponse);
    });
	
}
function showBag(logs,priceRange)
{
	var id ;
	document.getElementById('9').style.display = 'none';	
	var len=logs.length;
	for(var i =0;i<len;i++)
	{	
		id = logs[i].id;
		document.getElementById(id).style.display = 'none';			
		if(logs[i].price > priceRange.p1 && logs[i].price <= priceRange.p2)
		{
			document.getElementById(id).style.display = 'block';
			}
			else
			{
					document.getElementById(id).style.display = 'none';
			}
	}
}