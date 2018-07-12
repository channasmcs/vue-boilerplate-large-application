<style>
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css';
</style>

<template>
    <header>     <!-- Navigation -->
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<div class="container">
			<router-link class="navbar-brand" to="/">Vue <small>boilerplate large application</small> </router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item active">
					<router-link class="nav-link" to="/">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/about-us">About Us</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/example">Example</router-link>
				</li>
			</ul>
			</div>
		</div>
		</nav>
	</header>
</template>
