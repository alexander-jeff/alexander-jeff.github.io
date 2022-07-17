<script>
	let name = 'Jeff';
	let message = 'Not much to see here now. Please check back later!';
	let slogan = '';
</script>

<div id="info-card">
	<h1 class="main-header">Hi! I'm {name}.</h1>
	<p data-testid="info-text">{message}</p>
	<p>
		If you're bored, check out <a href="https://youtu.be/-mhZoYL-tMo">
			this fun video of Juno Birch playing the Sims.
		</a>
	</p>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito&display=swap');
	.main-header {
		font-family: 'Fredoka One', sans-serif;
		font-stretch: ultra-expanded;
	}
	#info-card {
		font-family: 'Nunito', sans-serif;
		color: black;
		height: 200px;
		width: 30%;
		padding: 1rem;
	}
</style>
