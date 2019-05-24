var user;
var useri=50;
var v;
var logdUser;
var reg = function()
{
var type = "User"; 
	name = document.getElementById('nameid').value;		
	email = document.getElementById('emailid').value;		
	contactnum = document.getElementById('phonenumberid').value;		
	pass = document.getElementById('passid').value;
	 $('span#profileid').text(''+'abc');
	user={
	name, email, contactnum, pass,	 
	};	
	registerUsingAjax(user);

}

var registerUsingAjax = function (newItem) {//saving the dataitems of userinput in mongodb
    var ajax = $.ajax({
        url: "http://localhost:3000/register",
        type: "POST",
        dataType: "json",
        data: {"logs": newItem}//data send to nodeserver
    });

    ajax.success(function (response) {

        if (response.result == true) {
             alert('Thank you For Registration');
        }      
    });
   
};
var login = function(){
	emailid = document.getElementById('eid').value;	
	passid = document.getElementById('pid').value;	
	var logeduser = { emailid, passid,}	
	var archive; 
	var i=0;
	var type = localStorage.getItem('title');	
	checkUser(logeduser);
	// showUserId(logeduser);
	
}

// var showUserId = function (newItem) {//saving the dataitems of userinput in mongodb
    // var ajax = $.ajax({
        // url: "http://localhost:3000/login",
        // type: "POST",
        // dataType: "json",
        // data: {"loginuser": newItem}//data send to nodeserver
    // });

    // ajax.success(function (response) {

        // if (response.result == true) {
             // alert('success');
        // }      
    // });
   
// };
var checkUser = function (email) {// search for the items of selected cowid from mongodb
    
    var ajax = $.ajax({
        url: "http://localhost:3000/search",        
		type: "POST",
        dataType: "json",
        data: {"reguser": email}//data send to nodeserver
        
    });

    ajax.success(function (response) {
        if (response.result == true) {          
            var logs = response.data;
			// for(var i=0; i< logs.length(); i++)
			// {			
			if(logs.length!=0)
				{			
					alert('Login Success');
 // document.getElementById("logmsg").innerHTML = "Sorry Service Not available Now!!!!";

// showModalDialog("lll");
// <script>
// document.getElementById("demo").innerHTML = 5 + 6;
// </script>
					localStorage.setItem('user',emailid);				
					// window.location.href = "index.html";
	 // <p style="color:red"> Login Failed. Please try again. </p>				
  // <script>
// document.getElementById("demo").innerHTML = 5 + 6;
// </script>
				}
				else
				{
					alert('Invalid Id or Password');
					
				}
			// }			
            
        }
    });

    ajax.fail(function (errorResponse) {
        console.log(errorResponse);
    });
}
