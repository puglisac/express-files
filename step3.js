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

function writeNewFile(newFile, source) {
	fs.readFile(source, "utf8", (err, data) => {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		fs.writeFile(newFile, data, (err) => {
			if (err) throw err;
			console.log("The file has been saved!");
		});
	});
}

filePath = process.argv[2];
if (filePath.startsWith("--out")) {
	writeNewFile(process.argv[3], process.argv[4]);
} else if (filePath.startsWith("http")) {
	webCat(filePath);
} else {
	cat(filePath);
}
