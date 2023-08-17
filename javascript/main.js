/*take input */


document.querySelector(".js-go").addEventListener('click',function(){  
     var input =document.querySelector("input").value;
   
     getdata(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    
    var input = document.querySelector("input").value;
  
    //if enter is pressed
    if(e.which===13){
        getdata(input);
    }
});
//get data from giphy
function getdata(input){

    var userin = input.split(' ').join('+');
  var limit=10;
    var url="http://api.giphy.com/v1/gifs/search?q="+userin+"&api_key=1TU6PRL5FU2rN7dOYLDvOxfrK3FGYbMI&limit="+limit+"";
    // AJAX Request

    var ajax = new XMLHttpRequest();

 ajax.open( 'GET', url );

 ajax.send();

 ajax.addEventListener('load', function(z){

    var val = z.target.response;

 pushtoDOM(val);
 

});

}
/*display the results*/
function pushtoDOM(input){
    var container = document.querySelector(".js-container");

  container.innerHTML=null;

    var response = JSON.parse(input);
    var imgurl = response.data;

    imgurl.forEach(function(gif){
      var  src=gif.images.fixed_height.url;

        container.innerHTML += "<img src=\""+src+"\" class=\"container-image\">";
    

    });
 

}
