
window.onload = function() {

  //localStorage.getItem("orderNr")
  var urlString = "http://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow";
	$.ajax({
      url: urlString, success: function (result) {
			alert("load result user");
			var devName = document.createElement('p');  //nume developer
			var devLoc = document.createElement('p');  //locatia
			var devImg = document.createElement('img'); //poza developer
			var devBadges = document.createElement('p'); //nr de badge-uri

			devImg.setAttribute("src",result.items[localStorage.getItem("orderNr")].profile_image);
			devName.innerHTML = "Name: " + result.items[localStorage.getItem("orderNr")].display_name;
			
			var newDiv = document.createElement('div');  //div contains name and photo
			newDiv.setAttribute("id","divNameImg");
			newDiv.appendChild(devImg);
			newDiv.appendChild(devName);
			
			devLoc.innerHTML = "Location: ha";
			devLoc.setAttribute("id","devLoc");
			
			devBadges.innerHTML = "Badges: 10 gold | 3 silver | 90 bronze";
			devBadges.setAttribute("id","devBadges");

			document.getElementById("divInfo").appendChild(newDiv);
			document.getElementById("divInfo").appendChild(devLoc);
			document.getElementById("divInfo").appendChild(devBadges);
		}
    });   
};