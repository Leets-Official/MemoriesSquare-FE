<script>
  import { onMount } from 'svelte';
  import springFetch from '../../lib/api';
  import { access_token, id, nickname, email, vendor, createdAt, is_login } from '../../lib/store';

  onMount(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const token = searchParams.get('token');

    springFetch('get', '/user/me', '', token, (data) => {
      $is_login = true;
      $id = data.result.id;
      $nickname = data.result.nickname;
      $email = data.result.email;
      $vendor = data.result.vendor;
      $createdAt = data.result.createdAt;
      $access_token = token;
      window.location.href = import.meta.env.VITE_FRONTEND_URL;
    });
  });
</script>

<svelte:head>
  <title>Memories Square Auth</title>
  <meta name="description" content="login" />
</svelte:head>
