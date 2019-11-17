const callback = function(){
  // Handler when the DOM is fully loaded

	//Stars
	const starElem = document.getElementById("stars");
	for (i=1;i<10;i++) {
		let opacity = getRandomFloat(0.8,1,2);
		let animation_duration = getRandomFloat(0.8,1.2,1);
		let dimension = getRandomInt(2,20);

		let style = "height:"+dimension+"px;" +
					"width:"+dimension+"px;" +
					"opacity:"+opacity + ";" +
					"animation-duration:"+animation_duration+"s;" +
					"top:"+getRandomInt(1,99)+"%;" +
					"left:"+getRandomInt(1,99)+"%"
	
		starElem.innerHTML += '<div style="'+style+'" class="star-'+i+' star"></div>';
	}

	const sections = document.querySelectorAll("section");
	const theNav = document.getElementById("navbar").querySelector("ul");
	sections.forEach(function(e, i) {
	  theNav.innerHTML += '<li><a href="#'+e.id+'">'+e.id+'</a></li>';
	});

};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}

function getRandomFloat(min, max, n) {
	return (Math.random() * (max - min) + min).toFixed(n);
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
  }

/*
  .stars {
    background-color: white;
    border-radius: 50%;
    animation-iteration-count: infinite;
    animation-name: twinkle;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 0.9s;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1.1s;
  }
  */