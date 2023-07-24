<script>
    export let thisYear;
    export let thisMonth;
    export let selectedDay;
    export let DUMMY_DATA;
    import thin_black from "$lib/assets/thin_frame_black.png"
</script>

<div class="todayImage relative">
    {#if selectedDay}
      <hr class="border-2 border-solid border-blue-400 mt-8">
      <div class="absolute top-6 left-9 flex items-center">
        <div class="rounded-full w-3 h-3 bg-blue-700"></div>
        <div class="ml-3 text-lg font-semibold">{`${thisYear}년 ${thisMonth}월 ${selectedDay}일`}</div>
      </div>
      <div class="flex">
        <hr class="border-l-4 border-blue-400 h-auto ml-10">
        <div class="image-container mt-16 ml-4 mb-16 flex flex-row flex-wrap gap-2">
          {#if DUMMY_DATA[thisYear][thisMonth][selectedDay]['photos'] > 0}
            {#each Array(DUMMY_DATA[thisYear][thisMonth][selectedDay]['photos']) as _}
              <img class="w-20" src={thin_black} alt="frame"/>
            {/each}
          {:else}
            <p class="mt-8">이 날에 업로드한 추억 사진이 없습니다. 🙁</p>
          {/if}
        </div>
      </div>
    {/if}
</div>