const fs = require("fs");
const axios = require("axios");

function cat(path) {
	fs.readFile(path, "utf8", (err, data) => {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		console.log(data);
	});
}

async function webCat(url) {
	try {
		resp = await axios.get(url);
		console.log(resp);
	} catch (err) {
		console.log(err);
	}
}

filePath = process.argv[2];
if (filePath.startsWith("http")) {
	webCat(filePath);
} else {
	cat(filePath);
}
