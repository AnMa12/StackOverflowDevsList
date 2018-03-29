
window.onload = function() {
	
	var urlString = "http://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow";
	$.ajax({
    url: urlString, success: function (result) {
		var noDev = result.items.length; //get the number of StackOverflow developers
			var list = document.createElement('ul');
			list.setAttribute("class","todo-list");
			for(var i = 0; i < noDev; i++) {
				var item = document.createElement('li');
				item.setAttribute("class","todo");
				var devName = document.createElement('p');
				var number = document.createElement('section');
				var devImg = document.createElement('img');
								
				devName.innerHTML = result.items[i].display_name; //get the name of each SO developer
				devName.setAttribute("class","todo__text");
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

function filterList() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("divList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].childNodes[2];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function sortByName() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("divList");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*check if the next item should
      switch place with the current item:*/
      if (b[i].childNodes[2].innerHTML.toLowerCase() > b[i + 1].childNodes[2].innerHTML.toLowerCase()) {
        /*if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop:*/
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark the switch as done:*/
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

function sortByRank() {
	window.open("mainPage.html", "_self");
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

/*
<!DOCTYPE html>
<html>
<title>Sort a HTML List Alphabetically</title>
<body>

<p>Click the button to sort the list alphabetically:</p>
<button onclick="sortList()">Sort</button>

<div id = "divList">
			<!-- javascript -->
		</div>

<ul id="id01">
  <li>Oslo</li>
  <li>Stockholm</li>
  <li>Helsinki</li>
  <li>Berlin</li>
  <li>Rome</li>
  <li>Madrid</li>
</ul>


<script>
window.onload = function() {
	
	var urlString = "http://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow";
	//$.ajax({
    //url: urlString, success: function (result) {
		var noDev = 30; //get the number of StackOverflow developers
			var list = document.createElement('ul');
			list.setAttribute("id","devList");
			list.setAttribute("class","todo-list");
			for(var i = 0; i < noDev; i++) {
				var item = document.createElement('li');
				item.setAttribute("class","todo");
				var devName = document.createElement('p');
				var number = document.createElement('section');
				var devImg = document.createElement('img');
						
				devName.setAttribute("class","todo__text");
				
				if( i == 0 )				
				devName.innerHTML = "Maria"; //get the name of each SO developer
			else if( i == 2 )				
				devName.innerHTML = "Ionel"; //get the name of each SO developer
			else if( i == 5 )				
				devName.innerHTML = "Ana"; //get the name of each SO developer
			else 	
				devName.innerHTML = "Silvia"; //get the name of each SO developer
				
				number.innerHTML = i;
				//devImg.setAttribute("src",result.items[i].profile_image); //get the profile image of each SO developer
						
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
		//});	  
	  //}

	
    }); 
		
};
function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("devList");
  switching = true;

  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;

      //alert(b[i].firstChild.innerHTML.toLowerCase());
      if (b[i].thirdChild.childNodes[2].innerHTML.toLowerCase() > b[i + 1].thirdChild.childNodes[2].innerHTML.toLowerCase()) {

        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
</script>

</body>
</html>
*/

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