
window.onload = function() {

	var urlString = "http://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow";
    $.ajax({
      url: urlString, success: function (result) {
			var noDev = result.items.length; //get the number of StackOverflow developers
			// Create the list element:
			var list = document.createElement('ul');
			for(var i = 0; i < noDev; i++) {
				var item = document.createElement('li');
				var devName = document.createElement('p');
				var devImg = document.createElement('img');
					
				devName.innerHTML = result.items[i].display_name; //get the name of each SO developer
					devName.onclick = function() {
						var myWindow = window.open("secondpage.html", "_self");
					};
				//devName.setAttribute("onclick", onclick='open(this);');
				devImg.setAttribute("src",result.items[i].profile_image); //get the profile image of each SO developer
					
				item.appendChild(devName);
				devName.appendChild(devImg);
				list.appendChild(item);
			}
			document.getElementById("stackoverflowList").appendChild(list);          
		}
      
    });   
};

/*function open(p) {
	//var myWindow = window.open("secondpage.html", "_self");
	alert("amitat");
};*/

//$("#name").text(result.items[i].display_name); //get the name of each SO developer
//$("#image").attr('src',result.items[i].profile_image); //get the profile image of each SO developer
/* $( document ).ready(function(){
  var urlString = "http://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow";
    $.ajax({
      url: urlString, success: function (result) {
        var noDev = result.items.length //get the number of StackOverflow developers
          console.log(noDev);
        for(var i = 0; i < noDev; i++) {
          console.log(result.items[i].display_name);
        }
      }
    });    
}) https://api.stackexchange.com/docs/advanced-search
*/