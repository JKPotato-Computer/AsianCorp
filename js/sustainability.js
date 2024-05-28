let currentIndex = 0;
const options = {
	root: null, // Use the viewport as the root
	rootMargin: `-${window.innerHeight  * 0.4}px 0px 0px 0px`, // Shift the intersection points
	threshold: [0] // Trigger callback as soon as any part of the element is in the viewport
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if ((entry.isIntersecting)){
			document.querySelector("#floatingImage").className = "active";
			document.querySelectorAll("#floatingImage > span.descriptionIcon")[0].textContent = entry.target.dataset.icon;
			document.querySelectorAll("#floatingImage > span.descriptionIcon")[0].dataset.icon = entry.target.dataset.icon;
			currentIndex = parseInt(entry.target.dataset.index);
			entry.target.dataset.status = "active";
		} else {
			if ((currentIndex == 1) || ((currentIndex == 13) && (document.querySelector('#scrollPage > span:nth-child(12)').dataset.status == "inactive"))) {
				document.querySelector("#floatingImage").className = "";
			} else {
				entry.target.dataset.status = "inactive";
			}
		}
	})
},options)

for (const element of document.querySelectorAll('#scrollPage > span')) {
	element.dataset.status = "inactive";
	observer.observe(element);
}

document.querySelector("#ThemeChanger").onclick = function() {
	document.documentElement.dataset.theme = (document.documentElement.dataset.theme == "light") ? ("dark") : ("light");
	this.textContent = ((document.documentElement.dataset.theme == "light") ? ("Dark") : ("Light")) + " Theme"
}