var postsData = [

	{
		title: 'Introdução ao Telescope',
		author: 'Francisco André',
		url: 'http://umsitesuperfoda.com/Telescope'
	},
	{
		title: 'Meteor',
		author: 'João Gabriel',
		url: 'http://jotagabriel.com/Meteor'
	},
	{
		title: 'Meteor o Livro',
		author: 'Thaline André',
		url: 'http://meteorbook.com/MeteorBook'
	},
	{
		title: 'Meteor o Livro - Segunda Edição',
		author: 'Francisco André',
		url: 'http://meteorbook-second.com/MeteorBook'
	},

];

Template.postsList.helpers({
	posts: postsData
});