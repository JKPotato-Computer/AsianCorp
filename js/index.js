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

for (const element of document.querySelectorAll('main div.galleryDisplay')) {
	element.classList.add("invisible")
	observer.observe(element);
}

document.querySelector("#preOrder").onclick = function() {
	n += 1;
	document.querySelectorAll(".bagCount")[0].textContent = n;

	if (n >= 100) {
		document.querySelectorAll("a:has(.bagCount)")[0].style.backgroundColor = "rgb(255 0 0)";
	}
}

document.querySelector("#ThemeChanger").onclick = function() {
	document.documentElement.dataset.theme = (document.documentElement.dataset.theme == "light") ? ("dark") : ("light");
	this.textContent = ((document.documentElement.dataset.theme == "light") ? ("Dark") : ("Light")) + " Theme"
}