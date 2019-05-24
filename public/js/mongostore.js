
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
 var initial = function()
{
	// var mitems ={menmenu};
	 // var a= menmenu[0][0];
	  // var a= menmenu[0][0];
	// storeLogsUsingAjaxPK(a);
	// storeLogsUsingAjaxPW(womenmenu);
	// storeLogsUsingAjaxPK(kidsmenu);
	// var price, name, type,id, input, menuItems, clothname,s,cart,priceitem,itemprice;

	// tryme();
	for( var i = 0;i<27;i++)
		{
		 // var a= menmenu[i][0];
		  // var b= womenmenu[i][0];
		   var c= kidsmenu[i][0];
		// storeLogsUsingAjaxPM(a);		 
		// storeLogsUsingAjaxPW(b);
		storeLogsUsingAjaxPK(c);
	}
	
}
var womenmenu = {	
    0: [
        {
            Product: 'Women Clothes',
            type: 'Light Green Shirt',
            price: 250,
			id: 0,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenclothes/lt1.jpeg",
			itemsize:I_size
			
        }
        
    ],
    1: [
	{
         Product: 'Women Clothes',
            type: 'Pink Tshirt',
            price: 500,
			id: 1,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenclothes/lt2.jpeg",
			itemsize:I_size
			}
    ],
    2: [
         {
            Product: 'Women Clothes',
            type: 'Blue Check Shirt',
            price: 1000,
			id: 2,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenclothes/lt3.jpeg",
			itemsize:I_size
			
	
			
        }
         
    ],
    3: [
        {
            Product: 'Women Clothes',
            type: 'Red Check Shirt',
            price: 1200,
			id: 3,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenclothes/lt4.jpeg",
			itemsize:I_size
        }
    ]    ,
    4: [
        {
            Product: 'Women Clothes',
            type: 'Red T-Shirt',
            price: 1500,
			id: 4,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenclothes/lt5.jpeg",
			itemsize:I_size
        }
         
    ],
    5: [
        {  Product: 'Women Clothes',
            type: 'Red-check Shirt',
            price: 2200,
			id: 5,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenclothes/lt6.jpeg",
			itemsize:I_size
        }
    ],
	6: [
        {  Product: 'Women Clothes',
            type: 'Red&white Shirt',
            price: 2700,
			id: 6,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenclothes/lt7.jpeg",
			itemsize:I_size
        }
    ],
	7: [
        {  Product: 'Women Clothes',
            type: 'Light Blue Shirt',
            price: 3000,
			id: 7,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenclothes/lt8.jpeg",
			itemsize:I_size
        }
    ],
	8: [
        {  Product: 'Women Clothes',
            type: 'Light GreenShirt',
            price: 1500,
			id: 8,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenclothes/lt9.jpeg",
			itemsize:I_size
        }
    ],
	 9: [
        {
            Product: 'Women Bag',
            type: 'Light Green Shirt',
            price: 250,
			id: 9,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenbags/lbag1.jpeg",
			itemsize:I_size			
        }
        
    ],
    10: [
	{
         Product: 'Women Bag',
            type: 'Pink Tshirt',
            price: 500,
			id: 10,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenbags/lbag2.jpeg",
			itemsize:I_size	
			}
    ],
    11: [
         {
            Product: 'Women Bag',
            type: 'Blue Check Shirt',
            price: 1000,
			id: 11,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenbags/lbag3.jpeg",
			itemsize:I_size
			
	
			
        }
         
    ],
    12: [
        {
            Product: 'Women Bag',
            type: 'Red Check Shirt',
            price: 1200,
			id: 12,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenbags/lbag4.jpeg",
			itemsize:I_size
        }
    ]    ,
    13: [
        {
            Product: 'Women Bag',
            type: 'Red T-Shirt',
            price: 1500,
			id: 13,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenbags/lbag5.jpeg",
			itemsize:I_size
        }
         
    ],
    14: [
        {  Product: 'Women Bag',
            type: 'Red-check Shirt',
            price: 2200,
			id: 14,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenbags/lbag6.jpeg",
			itemsize:I_size
        }
    ],
	15: [
        {  Product: 'Women Bag',
            type: 'Red&white Shirt',
            price: 2700,
			id: 15,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenbags/lbag7.jpeg",
			itemsize:I_size
        }
    ],
	16: [
        {  Product: 'Women Bag',
            type: 'Light Blue Shirt',
            price: 3000,
			id: 16,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenbags/lbag8.jpeg",
			itemsize:I_size
        }
    ],
	17: [
        {  Product: 'Women Bag',
            type: 'Light GreenShirt',
            price: 1500,
			id: 17,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenbags/lbag9.jpeg",
			itemsize:I_size
        }
    ],
	18: [
        {
            Product: 'Women Shoe',
            type: 'Light Green Shirt',
            price: 250,
			id: 18,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenshoes/ls1.jpeg",
			itemsize:I_size
			
        }
        
    ],
    19: [
	{
         Product: 'Women Shoe',
            type: 'Pink Tshirt',
            price: 500,
			id: 19,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenshoes/ls2.jpeg",
			itemsize:I_size
			}
    ],
    20: [
         {
            Product: 'Women Shoe',
            type: 'Blue Check Shirt',
            price: 1000,
			id: 20,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenshoes/ls3.jpeg",
			itemsize:I_size
			
	
			
        }
         
    ],
    21: [
        {
            Product: 'Women Shoe',
            type: 'Red Check Shirt',
            price: 1200,
			id: 21,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenshoes/ls4.jpeg",
			itemsize:I_size
        }
    ]    ,
    22: [
        {
            Product: 'Women Shoe',
            type: 'Red T-Shirt',
            price: 1500,
			id: 22,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenshoes/ls5.jpeg",
			itemsize:I_size
        }
         
    ],
    23: [
        {  Product: 'Women Shoe',
            type: 'Red-check Shirt',
            price: 2200,
			id: 23,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenshoes/ls6.jpeg",
			itemsize:I_size
        }
    ],
	24: [
        {  Product: 'Women Shoe',
            type: 'Red&white Shirt',
            price: 2700,
			id: 24,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenshoes/ls7.jpeg",
			itemsize:I_size
        }
    ],
	25: [
        {  Product: 'Women Shoe',
            type: 'Light Blue Shirt',
            price: 3000,
			id: 25,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenshoes/ls8.jpeg",
			itemsize:I_size
        }
    ],
	26: [
        {  Product: 'Women Shoe',
            type: 'Light GreenShirt',
            price: 1500,
			id: 26,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/womenshoes/ls9.jpeg",
			itemsize:I_size
        }
    ]

};



var menmenu = {	
    0: [
        {
            Product: 'Men Clothes',
            type: 'Light Green Shirt',
            price: 250,
			id: 0,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menclothes/mc1.jpeg",
			itemsize:I_size
        }
        
    ],
    1: [
	{
         Product: 'Men Clothes',
            type: 'Pink Tshirt',
            price: 500,
			id: 1,
			quantity: input,
			totalprice: totalprice ,
			imageurl:"images/menclothes/mc2.jpeg",
			itemsize:I_size			}
    ],
    2: [
         {
            Product: 'Men Clothes',
            type: 'Blue Check Shirt',
            price: 1000,
			id: 2,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menclothes/mc3.jpeg",
			itemsize:I_size			
			
	
			
        }
         
    ],
    3: [
        {
            Product: 'Men Clothes',
            type: 'Red Check Shirt',
            price: 1200,
			id: 3,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menclothes/mc4.jpeg",
			itemsize:I_size			
        }
    ]    ,
    4: [
        {
            Product: 'Men Clothes',
            type: 'Red T-Shirt',
            price: 1500,
			id: 4,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menclothes/mc5.jpeg",
			itemsize:I_size			
        }
         
    ],
    5: [
        {  Product: 'Men Clothes',
            type: 'Red-check Shirt',
            price: 2200,
			id: 5,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menclothes/mc6.jpeg",
			itemsize:I_size			
        }
    ],
	6: [
        {  Product: 'Men Clothes',
            type: 'Red&white Shirt',
            price: 2700,
			id: 6,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menclothes/mc7.jpeg",
			itemsize:I_size			
        }
    ],
	7: [
        {  Product: 'Men Clothes',
            type: 'Light Blue Shirt',
            price: 3000,
			id: 7,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menclothes/mc8.jpeg",
			itemsize:I_size			
        }
    ],
	8: [
        {  Product: 'Men Clothes',
            type: 'Light GreenShirt',
            price: 1500,
			id: 8,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menclothes/mc8.jpeg",
			itemsize:I_size			
        }
    ],
	 9: [
        {
            Product: 'Men Bag',
            type: 'Light Green Shirt',
            price: 250,
			id: 9,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menbag/bag1.jpg",
			itemsize:I_size						
        }
        
    ],
    10: [
	{
         Product: 'Men Bag',
            type: 'Pink Tshirt',
            price: 500,
			id: 10,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menbag/bag2.jpg",
			itemsize:I_size						}
    ],
    11: [
         {
            Product: 'Men Bag',
            type: 'Blue Check Shirt',
            price: 1000,
			id: 11,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menbag/bag3.jpg",
			itemsize:I_size			
			
	
			
        }
         
    ],
    12: [
        {
            Product: 'Men Bag',
            type: 'Red Check Shirt',
            price: 1200,
			id: 12,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menbag/bag4.jpg",
			itemsize:I_size			
        }
    ]    ,
    13: [
        {
            Product: 'Men Bag',
            type: 'Red T-Shirt',
            price: 1500,
			id: 13,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menbag/bag5.jpg",
			itemsize:I_size			
        }
         
    ],
    14: [
        {  Product: 'Men Bag',
            type: 'Red-check Shirt',
            price: 2200,
			id: 14,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menbag/bag6.jpg",
			itemsize:I_size			
        }
    ],
	15: [
        {  Product: 'Men Bag',
            type: 'Red&white Shirt',
            price: 2700,
			id: 15,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menbag/bag7.jpg",
			itemsize:I_size			
        }
    ],
	16: [
        {  Product: 'Men Bag',
            type: 'Light Blue Shirt',
            price: 3000,
			id: 16,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menbag/bag8.jpg",
			itemsize:I_size			
        }
    ],
	17: [
        {  Product: 'Men Bag',
            type: 'Light GreenShirt',
            price: 1500,
			id: 17,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menbag/bag9.jpg",
			itemsize:I_size			
        }
    ],
	18: [
        {
            Product: 'Men Shoe',
            type: 'Light Green Shirt',
            price: 250,
			id: 18,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menshoes/ms1.jpeg",
			itemsize:I_size						
        }
        
    ],
    19: [
	{
         Product: 'Men Shoe',
            type: 'Pink Tshirt',
            price: 500,
			id: 19,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menshoes/ms2.jpeg",
			itemsize:I_size						
			}
    ],
    20: [
         {
            Product: 'Men Shoe',
            type: 'Blue Check Shirt',
            price: 1000,
			id: 20,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menshoes/ms3.jpeg",
			itemsize:I_size
			
	
			
        }
         
    ],
    21: [
        {
            Product: 'Men Shoe',
            type: 'Red Check Shirt',
            price: 1200,
			id: 21,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menshoes/ms4.jpeg",
			itemsize:I_size
        }
    ]    ,
    22: [
        {
            Product: 'Men Shoe',
            type: 'Red T-Shirt',
            price: 1500,
			id: 22,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menshoes/ms5.jpeg",
			itemsize:I_size
        }
         
    ],
    23: [
        {  Product: 'Men Shoe',
            type: 'Red-check Shirt',
            price: 2200,
			id: 23,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menshoes/ms6.jpeg",
			itemsize:I_size
        }
    ],
	24: [
        {  Product: 'Men Shoe',
            type: 'Red&white Shirt',
            price: 2700,
			id: 24,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menshoes/ms7.jpeg",
			itemsize:I_size
        }
    ],
	25: [
        {  Product: 'Men Shoe',
            type: 'Light Blue Shirt',
            price: 3000,
			id: 25,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menshoes/ms8.jpeg",
			itemsize:I_size
        }
    ],
	26: [
        {  Product: 'Men Bag',
            type: 'Light GreenShirt',
            price: 1500,
			id: 26,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/menshoes/ms9.jpeg",
			itemsize:I_size
        }]
	

}



var kidsmenu = {	
    0: [
        {
            Product: 'Kids Clothes',
            type: 'Light Green Shirt',
            price: 250,
			id: 0,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsclothes/kc1.jpeg",
			itemsize:I_size
        }
        
    ],
    1: [
	{
         Product: 'Kids Clothes',
            type: 'Pink Tshirt',
            price: 500,
			id: 1,
			quantity: input,
			totalprice: totalprice ,
			imageurl:"images/kidsclothes/kc2.jpeg",
			itemsize:I_size			}
    ],
    2: [
         {
            Product: 'Kids Clothes',
            type: 'Blue Check Shirt',
            price: 1000,
			id: 2,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsclothes/kc3.jpeg",
			itemsize:I_size			
			
	
			
        }
         
    ],
    3: [
        {
            Product: 'Kids Clothes',
            type: 'Red Check Shirt',
            price: 1200,
			id: 3,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsclothes/kc4.jpeg",
			itemsize:I_size			
        }
    ]    ,
    4: [
        {
            Product: 'Kids Clothes',
            type: 'Red T-Shirt',
            price: 1500,
			id: 4,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsclothes/kc5.jpeg",
			itemsize:I_size			
        }
         
    ],
    5: [
        {  Product: 'Kids Clothes',
            type: 'Red-check Shirt',
            price: 2200,
			id: 5,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsclothes/kc6.jpeg",
			itemsize:I_size			
        }
    ],
	6: [
        {  Product: 'Kids Clothes',
            type: 'Red&white Shirt',
            price: 2700,
			id: 6,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsclothes/kc7.jpeg",
			itemsize:I_size			
        }
    ],
	7: [
        {  Product: 'Kids Clothes',
            type: 'Light Blue Shirt',
            price: 3000,
			id: 7,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsclothes/kc8.jpeg",
			itemsize:I_size			
        }
    ],
	8: [
        {  Product: 'Kids Clothes',
            type: 'Light GreenShirt',
            price: 1500,
			id: 8,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsclothes/kc8.jpeg",
			itemsize:I_size			
        }
    ],
	 9: [
        {
            Product: 'Kids Bag',
            type: 'Light Green Shirt',
            price: 250,
			id: 9,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsbag/kb1.jpg",
			itemsize:I_size						
        }
        
    ],
    10: [
	{
         Product: 'Kids Bag',
            type: 'Pink Tshirt',
            price: 500,
			id: 10,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsbag/kb2.jpg",
			itemsize:I_size						}
    ],
    11: [
         {
            Product: 'Kids Bag',
            type: 'Blue Check Shirt',
            price: 1000,
			id: 11,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsbag/kb3.jpg",
			itemsize:I_size			
			
	
			
        }
         
    ],
    12: [
        {
            Product: 'Kids Bag',
            type: 'Red Check Shirt',
            price: 1200,
			id: 12,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsbag/kb4.jpg",
			itemsize:I_size			
        }
    ]    ,
    13: [
        {
            Product: 'Kids Bag',
            type: 'Red T-Shirt',
            price: 1500,
			id: 13,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsbag/kb5.jpg",
			itemsize:I_size			
        }
         
    ],
    14: [
        {  Product: 'Kids Bag',
            type: 'Red-check Shirt',
            price: 2200,
			id: 14,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsbag/kb6.jpg",
			itemsize:I_size			
        }
    ],
	15: [
        {  Product: 'Kids Bag',
            type: 'Red&white Shirt',
            price: 2700,
			id: 15,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsbag/kb7.jpg",
			itemsize:I_size			
        }
    ],
	16: [
        {  Product: 'Kids Bag',
            type: 'Light Blue Shirt',
            price: 3000,
			id: 16,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsbag/kb8.jpg",
			itemsize:I_size			
        }
    ],
	17: [
        {  Product: 'Kids Bag',
            type: 'Light GreenShirt',
            price: 1500,
			id: 17,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsbag/kb9.jpg",
			itemsize:I_size			
        }
    ],
	18: [
        {
            Product: 'Kids Shoe',
            type: 'Light Green Shirt',
            price: 250,
			id: 18,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsshoes/ks1.jpeg",
			itemsize:I_size						
        }
        
    ],
    19: [
	{
         Product: 'Kids Shoe',
            type: 'Pink Tshirt',
            price: 500,
			id: 19,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsshoes/ks2.jpeg",
			itemsize:I_size						
			}
    ],
    20: [
         {
            Product: 'Kids Shoe',
            type: 'Blue Check Shirt',
            price: 1000,
			id: 20,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsshoes/ks3.jpeg",
			itemsize:I_size
			
	
			
        }
         
    ],
    21: [
        {
            Product: 'Kids Shoe',
            type: 'Red Check Shirt',
            price: 1200,
			id: 20,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsshoes/ks4.jpeg",
			itemsize:I_size
        }
    ]    ,
    22: [
        {
            Product: 'Kids Shoe',
            type: 'Red T-Shirt',
            price: 1500,
			id: 22,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsshoes/ks5.jpeg",
			itemsize:I_size
        }
         
    ],
    23: [
        {  Product: 'Kids Shoe',
            type: 'Red-check Shirt',
            price: 2200,
			id: 23,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsshoes/ks6.jpeg",
			itemsize:I_size
        }
    ],
	24: [
        {  Product: 'Kids Shoe',
            type: 'Red&white Shirt',
            price: 2700,
			id: 24,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsshoes/ks7.jpeg",
			itemsize:I_size
        }
    ],
	25: [
        {  Product: 'Kids Shoe',
            type: 'Light Blue Shirt',
            price: 3000,
			id: 25,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsshoes/ks8.jpeg",
			itemsize:I_size
        }
    ],
	26: [
        {  Product: 'Kids Shoe',
            type: 'Light GreenShirt',
            price: 1500,
			id: 26,
			quantity: input,
			totalprice: totalprice,
			imageurl:"images/kidsshoes/ks9.jpeg",
			itemsize:I_size
        }
    ]

};
var tryme = function()
{
	
	for( var i = 0;i<27;i++)
		{
		 var a= menmenu[i][0];
		  var b= womenmenu[i][0];
		   var c= kidsmenu[i][0];
		storeLogsUsingAjaxPM(a);		 
		storeLogsUsingAjaxPW(b);
		storeLogsUsingAjaxPK(c);
	}
	
}

var storeLogsUsingAjaxPM = function (newItem) {//saving the dataitems of userinput in mongodb
    var ajax = $.ajax({
        url: "http://localhost:3000/products_men",
        type: "POST",
        dataType: "json",
        data: {"logs": newItem}//data send to nodeserver
    });

    ajax.success(function (response) {

        if (response.result == true) {
            // alert('Log saved in MongoDB');
            // clearing the items from local storage after storing in mongodb
        }
        console.log(response);
    });
   
};
var storeLogsUsingAjaxPW = function (newItem) {//saving the dataitems of userinput in mongodb
    var ajax = $.ajax({
        url: "http://localhost:3000/products_Women",
        type: "POST",
        dataType: "json",
        data: {"logs": newItem}//data send to nodeserver
    });

    ajax.success(function (response) {

        if (response.result == true) {
            // alert('Log saved in MongoDB');
            // clearing the items from local storage after storing in mongodb
        }
        console.log(response);
    });
   
};
var storeLogsUsingAjaxPK = function (newItem) {//saving the dataitems of userinput in mongodb
    var ajax = $.ajax({
        url: "http://localhost:3000/products_Kids",
        type: "POST",
        dataType: "json",
        data: {"logs": newItem}//data send to nodeserver
    });

    ajax.success(function (response) {

        if (response.result == true) {
            // alert('Log saved in MongoDB');
            // clearing the items from local storage after storing in mongodb
        }
        console.log(response);
    });
   
};