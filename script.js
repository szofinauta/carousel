const images = [
	{
		title: "Night scene",
		source: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fdcdde66672659.5b92e224c0fc6.jpg",
		description: "bird-eye view of a church and pine trees at night"
	},

	{
		title: "Vigilant owl",
		source: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c1665651777425.58f94d2b5b72c.jpg",
		description: "dark blue night scenery with staring red-eyed owl"
	},

	{
		title: "Foggy house",
		source: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4d4cbf51777425.58f94d2b5cd1e.jpg",
		description: "night scenery of house in fog with purple and blue hues"
	},

	{
		title: "Neon Seagulls",
		source: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/aa4a2a63573187.5b7e0f3ddce5e.jpg",
		description: "night scenery of street reflecting neon pink harsh artificial light after rain with flying seagulls"
	}
];

let photo = document.querySelector("#photo");
let photoTitle = document.querySelector("#photo-title");
let photoDescription = document.querySelector("#photo-description");
let leftButton = document.querySelector("#left-button");
let rightButton = document.querySelector("#right-button");

let currentIndex = 0;

rightButton.addEventListener("click", function() {
	currentIndex += 1;
	currentIndex >= images.length ? currentIndex = 0 : currentIndex;
	photo.src = images[currentIndex].source;
	photoTitle.innerText = images[currentIndex].title;
	photoDescription.innerText = images[currentIndex].description;
	console.log(currentIndex);
});

leftButton.addEventListener("click", function() {
	currentIndex -= 1;
	currentIndex < 0 ? currentIndex = images.length-1 : currentIndex;
	photo.src = images[currentIndex].source;
	photoTitle.innerText = images[currentIndex].title;
	photoDescription.innerText = images[currentIndex].description;
	console.log(currentIndex);
});
