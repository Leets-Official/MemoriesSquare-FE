<script>
  import Calendar from './calendar/Calendar.svelte';
  import ImageModal from './imageupload/ImageModal.svelte';
  import Album from '../albumPage/Album.svelte';

  let status = '달력형';
</script>

<section>
  <div>
    <!-- <p class="text-3xl text-center">Memories Square</p> -->
    <div class="flex w-full items-center justify-center pt-4">
      <div class="">
        <div class="grid grid-cols-2 gap-4 relative rounded-full py-1 px-4 bg-gray-100">
          <div
            class="w-1/2 absolute bg-white p-4 ease-in-out duration-300 shadow-sm rounded-full mt-1 {status ==
            '앨범형'
              ? 'translate-x-full -mx-1'
              : 'mx-1'} "
          />
          <button class="text-gray-900 p-1 z-10" on:click={() => (status = '달력형')}>달력형</button
          >
          <button class="text-gray-900 p-1 z-10" on:click={() => (status = '앨범형')}>앨범형</button
          >
        </div>
      </div>
    </div>
    <div class="mt-6">
      {#if status == '달력형'}
        <Calendar />
      {:else}
        <Album />
      {/if}
    </div>
  </div>
  <ImageModal />
</section>
