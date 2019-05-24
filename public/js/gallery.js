var slideIndex = 1;
var onload = function(){	
	 slideinit();
	 var userId = localStorage.getItem('user'); 
	 var user = {userId,};	 
	 document.getElementById("profileid").innerHTML = userId;	
	 getTotalPrice(user);	 
	 totalprice = localStorage.getItem('local_totP');    
	 $('span#simpleCart_total').text(totalprice.toString());				   
	 
}


function slideinit() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("mySlides2");
  var z = document.getElementsByClassName("mySlides3");
  var z1 = document.getElementsByClassName("mySlides4");
  var k = document.getElementsByClassName("mid-3");
  var l = document.getElementsByClassName("mid-4");
  var m = document.getElementsByClassName("mid-5");
   var n = document.getElementsByClassName("mid-6");
  // if (n > x.length) {slideIndex = 1}    
  // if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
	 y[i].style.display = "none";  
	 z[i].style.display = "none";  
	  z1[i].style.display = "none";  
	 k[i].style.display = "none"; 
	l[i].style.display = "none";  
	m[i].style.display = "none";  
	n[i].style.display = "none";  	  	
  }
   x[slideIndex-1].style.display = "block";  
   y[slideIndex-1].style.display = "block";  
   z[slideIndex-1].style.display = "block";  
   z1[slideIndex-1].style.display = "block";  
	k[slideIndex-1].style.display = "block";  
	l[slideIndex-1].style.display = "block";  
	m[slideIndex-1].style.display = "block";  
	n[slideIndex-1].style.display = "block";  
	
}
function plusDivs(n,gen) {
	
  showDivs(slideIndex += n,gen.id);
}

function showDivs(n,gen) {//displaying gallery images by class on clicking next and previous
  var i,list,prim;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("mySlides2");
  var z = document.getElementsByClassName("mySlides3");
  var z1 = document.getElementsByClassName("mySlides4");
  var k = document.getElementsByClassName("mid-3");  
  var l = document.getElementsByClassName("mid-4");  
  var m = document.getElementsByClassName("mid-5");  
  var n1 = document.getElementsByClassName("mid-6");  
  if(gen =='G1'){list =x;prim = k;}
   if(gen =='G3'){list =z;prim = m;}
   if(gen =='G2'){list =y; prim = l;}  
    if(gen =='G4'){list =z1; prim = n1;}  
  if (n > list.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = list.length}
  for (i = 0; i < list.length; i++) {
     list[i].style.display = "none";  
	 prim[i].style.display = "none";	  
  }
    list[slideIndex-1].style.display = "block"; 
	prim[slideIndex-1].style.display = "block"; 
}
