<script>
  import Calendar from './calendar/Calendar.svelte';
  import ImageModal from './imageupload/ImageModal.svelte';
</script>

<section class="h-screen">
  <div>
    <!-- <p class="text-3xl text-center">Memories Square</p> -->
    <div class="float-right">
      <button
        class="bg-white hover:bg-gray-100 float-right text-gray-800 font-semibold m-6 py-2 px-4 border:none border-gray-400 rounded shadow"
      >
        내 앨범
      </button>
    </div>
    <div class="clear-right mt-20">
      <Calendar />
    </div>
  </div>
  <ImageModal />
</section>
