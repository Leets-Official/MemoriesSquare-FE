<script>
  import { onMount } from 'svelte';
  import springFetch from '../../lib/api';

  onMount(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const token = searchParams.get('token');

    springFetch('get', '/user/me', '', token, (data) => {
      console.log(data);
    });
  });
</script>

<svelte:head>
  <title>Memories Square Auth</title>
  <meta name="description" content="login" />
</svelte:head>
