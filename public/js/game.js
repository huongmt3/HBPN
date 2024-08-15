let currentElement = "";
let initialX = 0,
	initialY = 0;

const is_touch_device = () => {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
};

function dragStart(e) {
	initialX = is_touch_device() ? e.touches[0].clientX : e.clientX;
	initialY = is_touch_device() ? e.touches[0].clientY : e.clientY;
	if (e.target.getAttribute("id") != "dog-image" && e.target.tagName == "IMG")
		currentElement = e.target;
}
function dragOver(e) {
	e.preventDefault();
}

const drop = (e) => {
	if (currentElement != "") {
		e.preventDefault();
		let newX = is_touch_device() ? e.touches[0].clientX : e.clientX;
		let newY = is_touch_device() ? e.touches[0].clientY : e.clientY;

		currentElement.style.top =
			currentElement.offsetTop - (initialY - newY) + "px";
		currentElement.style.left =
			currentElement.offsetLeft - (initialX - newX) + "px";
		initialX = newX;
		initialY = newY;
	}
};
window.onload = () => {
	currentElement = "";
	let body = document.body;
	body.addEventListener("dragstart", dragStart, { passive: false });
	body.addEventListener("dragover", dragOver, { passive: false });
	body.addEventListener("drop", drop, { passive: false });
	body.addEventListener("touchstart", dragStart, { passive: false });
	body.addEventListener("touchmove", drop, { passive: false });
};
