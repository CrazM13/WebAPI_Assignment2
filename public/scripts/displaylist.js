fetch('/getdata').then(function (res) {
	return res.json();
}).then(function (entries) {
	entries.entries.forEach(function (entry) {
		document.getElementById("songlist").innerHTML += "<il><i>" + entry.song + "</i> by " + entry.author + "</il><br />";
	});
});