
/* javascript */
async function fetchFunction() {
	let jsonData;
	await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy")
		.then((response) => response.json())
		.then((json) => {
			jsonData = json;
		});
	return jsonData;
}

(async () => {
	let data = await fetchFunction();
	console.log(data.results[0]);
})();