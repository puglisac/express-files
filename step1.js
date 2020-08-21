const fs = require("fs");

function cat(path) {
	fs.readFile(path, "utf8", (err, data) => {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		console.log(data);
	});
}
filePath = process.argv[2];
cat(filePath);
