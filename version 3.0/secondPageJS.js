
window.onload = function() {

	//localStorage.getItem("orderNr")
	var urlString = "http://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow";
	$.ajax({
    url: urlString, success: function (result) {
		var devName = document.createElement('p');  //nume developer
		var devLoc = document.createElement('p');  //locatia
		var devImg = document.createElement('img'); //poza developer
		var devBadges = document.createElement('p'); //nr de badge-uri


		devName.innerHTML = "Name: " + result.items[localStorage.getItem("orderNr")].display_name;
		
		devLoc.innerHTML = "Location: " + result.items[localStorage.getItem("orderNr")].location;
		devLoc.setAttribute("id","devLoc");
		
		devImg.setAttribute("src",result.items[localStorage.getItem("orderNr")].profile_image);
		
		devBadges.innerHTML = "Badges: gold - " + result.items[localStorage.getItem("orderNr")].badge_counts.gold + 
				" | silver - " + result.items[localStorage.getItem("orderNr")].badge_counts.silver + " | bronze - " + 
				result.items[localStorage.getItem("orderNr")].badge_counts.bronze;
		devBadges.setAttribute("id","devBadges");

		var newDiv = document.createElement('div');  //div contains name and photo
		newDiv.setAttribute("id","divNameImg");
		newDiv.appendChild(devImg);
		newDiv.appendChild(devName);

		
		document.getElementById("divInfo").appendChild(newDiv);
		document.getElementById("divInfo").appendChild(devLoc);
		document.getElementById("divInfo").appendChild(devBadges);
		  }
    });
};

function backPage() {
	var myWindow = window.open("mainPage.html", "_self");
}