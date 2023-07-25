<script>
  import { access_token, id, nickname, email, vendor, createdAt, is_login } from '../../lib/store';
  import springFetch from '../../lib/api';
  import { onMount } from 'svelte';

  let imageAlbumView = [];
  let load = false;
  onMount(() => {
    springFetch('get', '/photo', '', $access_token, (data) => {
      for (let i = 0; i < data.result.length; i++) {
        console.log(i);
        if (data.result[i].crop == true) {
          imageAlbumView.push(data.result[i].imageUrl);
        }
      }
      load = true;
    });
  });
</script>

<div class="grid grid-cols-3">
  {#if load == true}
    {#each imageAlbumView as list, i}
      <img src={list} alt="" class="border-2 border-white" />
    {/each}
  {/if}
</div>
