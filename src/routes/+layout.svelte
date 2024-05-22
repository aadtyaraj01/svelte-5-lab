<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<ul class="flex flex-row gap-4 justify-center">
	<li><a href="/action">action</a></li>
	<li><a href="/blog/left">left</a></li>
	<li><a href="/blog/center">center</a></li>
</ul>
<slot />

<div id="container">
	<pre>
        {JSON.stringify($page, null, 2)}
    </pre>
</div>

<style>
	#container {
		width: 100%;
		height: 100vh;
		display: grid;
		place-items: center;
	}
</style>
