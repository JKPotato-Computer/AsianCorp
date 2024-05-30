let n = 0;

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if ((entry.isIntersecting) && (entry.target.classList.contains("invisible"))){
			entry.target.classList.add("visible");
			setTimeout(function() {
				entry.target.classList.remove("visible");
				entry.target.classList.remove("invisible");
			},500);
		}
	})
})

for (const element of document.querySelectorAll('main div.galleryDisplay, main > h1,main > h2,main > h3,main > h4,main > h5,main > h6')) {
	element.classList.add("invisible")
	observer.observe(element);
}

document.querySelector("#ThemeChanger").onclick = function() {
	document.documentElement.dataset.theme = (document.documentElement.dataset.theme == "light") ? ("dark") : ("light");
	this.textContent = ((document.documentElement.dataset.theme == "light") ? ("Dark") : ("Light")) + " Theme"
}

if (document.querySelector("#preOrder")) {
	document.querySelector("#preOrder").onclick = function() {
		n += 1;
		document.querySelectorAll(".bagCount")[0].textContent = n;
	
		if (n >= 100) {
			document.querySelectorAll("a:has(.bagCount)")[0].style.backgroundColor = "rgb(255 0 0)";
		}
	}
}
