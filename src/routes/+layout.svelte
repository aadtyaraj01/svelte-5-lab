<script>
    import { page } from '$app/stores';
</script>

<slot />

<div id='container'>
  
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