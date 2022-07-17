<script>
	let name = 'Jeff';
	let message = `I'm learning how to build static sites with Svelte, using Playwright BDD.`;
	let slogan = '';
</script>

<div id="info-card">
	<h1 class="main-header">Hi! I'm {name}.</h1>
	<p data-testid="info-text">{message}</p>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito&display=swap');
	.main-header {
		font-family: 'Fredoka One', sans-serif;
		font-stretch: ultra-expanded;
	}
	#info-card {
		border: 1px solid;
		border-radius: 10%;
		border-color: #00000099;
		font-family: 'Nunito', sans-serif;
		color: black;
		height: 200px;
		width: 30%;
		padding: 1rem;
	}
</style>
