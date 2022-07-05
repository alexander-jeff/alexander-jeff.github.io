import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/alexander-jeff/alexander-jeff.github.io.git', // Update to point to your repository
		user: {
			name: 'Jeff Alexander', // update to use your name
			email: '12126499+alexander-jeff@users.noreply.github.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	},
	(err) => {
		console.log(err);
	}
);
