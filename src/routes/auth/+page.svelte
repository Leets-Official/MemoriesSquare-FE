<svelte:head>
	<title>Memories Square Auth</title>
	<meta name="description" content="login" />
</svelte:head>

<script>
 import { onMount } from 'svelte';

	let token = '';

	onMount(() => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	token = searchParams.get('token');
	console.log(token)

	
	})
</script>
