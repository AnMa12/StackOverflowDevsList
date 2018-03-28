
window.onload = function() {
  alert("load page");
    var urlString = "http://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow";
	$.ajax({
      url: urlString, success: function (result) {
			alert("load result");
			var noDev = result.items.length; //get the number of StackOverflow developers
			// Create the list element:
			alert("load2");
			var list = document.createElement('ul');
			for(var i = 0; i < noDev; i++) {
				var item = document.createElement('li');
				var devName = document.createElement('p');
				var devImg = document.createElement('img');
				var number = document.createElement('section');
					
				devName.innerHTML = result.items[i].display_name; //get the name of each SO developer
				devImg.setAttribute("src",result.items[i].profile_image); //get the profile image of each SO developer
				number.innerHTML = i;
				
				item.appendChild(number);
				devName.appendChild(devImg);
				item.appendChild(devName);
				list.appendChild(item);
			}
			document.getElementById("divList").appendChild(list);          
		}
      
    });   
	
	$('li').click(function(){
		var devNr = $(this).children(":first").text();
		localStorage.setItem("orderNr",devNr);
		var myWindow = window.open("secondPage.html", "_self");
	});
};