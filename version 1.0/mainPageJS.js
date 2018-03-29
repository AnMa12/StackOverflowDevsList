
window.onload = function() {
	
	var urlString = "http://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow";
	$.ajax({
    url: urlString, success: function (result) {
		var noDev = result.items.length; //get the number of StackOverflow developers
			var list = document.createElement('ul');
			for(var i = 0; i < noDev; i++) {
				var item = document.createElement('li');
				var devName = document.createElement('p');
				var number = document.createElement('section');
				var devImg = document.createElement('img');
								
				devName.innerHTML = result.items[i].display_name; //get the name of each SO developer
				number.innerHTML = i;
				devImg.setAttribute("src",result.items[i].profile_image); //get the profile image of each SO developer
						
				item.appendChild(number);
				item.appendChild(devImg);
				item.appendChild(devName);
				list.appendChild(item);
			}
			document.getElementById("divList").appendChild(list);  
			
			$('li').click(function(){
				var devNr = $(this).children(":first").text();
				localStorage.setItem("orderNr",devNr);
				var myWindow = window.open("secondPage.html", "_self");
		});	  
	  }

	
    }); 
		
};

/*
window.onload = function() {
	
	var urlString = "http://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow";
	$.ajax({
    url: urlString, success: function (result) {
	var noDev = 30; //get the number of StackOverflow developers
			var list = document.createElement('ul');
			for(var i = 0; i < noDev; i++) {
				var item = document.createElement('li');
				var devName = document.createElement('p');
				var number = document.createElement('section');
				var devImg = document.createElement('img');
							
				devName.innerHTML = result.items[i].display_name; //get the name of each SO developer
				number.innerHTML = i;
				devImg.setAttribute("src",result.items[i].profile_image); //get the profile image of each SO developer
				//devImg.setAttribute("src","https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png"); //get the profile image of each SO developer
					
				item.appendChild(number);
				item.appendChild(devImg);
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
*/