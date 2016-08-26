if (Posts.find().count() === 0) {
	Posts.insert({
		title: "Introdução ao Telescope",
		author: "Francisco André",
		url: "http://franciscoandre.com"
	});
	Posts.insert({
		title: "Falando sobre o Meteor",
		author: "Thaline André",
		url: "http://thalineandre.com"
	});
	Posts.insert({
		title: "Meteor - O Livro",
		author: "João Gabriel",
		url: "http://joaoandre.com"
	});
}