<script>
  import { onMount } from 'svelte';

  let DUMMY_DATA = {
    2023: {
      7: {
        1: {
          weekDay: 'imsy',
          photos: 5
        },
        6: {
          photos: 10
        },
        7: {
          photos: 1
        },
        8: {
          photos: 4,
        },
        9: {
          photos: 1
        },
        10: {
          photos: 3
        },
        11: {
          photos: 5
        },
        12: {
          photos: 7
        },
        13: {
          photos: 9
        }
      }
    }
  };
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  let currentDate = new Date();
  let thisYear, thisMonth;
  let days = [];
  let selectedDay = '';

  onMount(() => {
    render();
  });

  const render = () => {
    [thisYear, thisMonth] = [currentDate.getFullYear(), currentDate.getMonth() + 1];
    const firstDay = new Date(thisYear, thisMonth - 1, 1).getDay();
    const daysInMonth = new Date(thisYear, thisMonth, 0).getDate();
    days = Array.from({ length: daysInMonth + firstDay }, (_, idx) => {
      const day = idx + 1 - firstDay;
      const weekDay = weekDays[idx % 7];
      return {
        day: day > 0 ? day : '',
        weekDay: weekDay
      };
    });

    // 이번 달의 DUMMY_DATA 초기화
    if (!(thisYear in DUMMY_DATA)) {
      DUMMY_DATA[thisYear] = {};
    }
    if (!(thisMonth in DUMMY_DATA[thisYear])) {
      DUMMY_DATA[thisYear][thisMonth] = {};
    }
    days.forEach((eachDay) => {
      if (eachDay.day !== '' && !(eachDay.day in DUMMY_DATA[thisYear][thisMonth])) {
        DUMMY_DATA[thisYear][thisMonth][eachDay.day] = {
          weekDay: eachDay.weekDay,
          photos: 0,
          bg: 'bg-white'
        };
      }
    });
    // DUMMY_DATA의 background color 초기화
    for (const day in DUMMY_DATA[thisYear][thisMonth]) {
      const photoCount = DUMMY_DATA[thisYear][thisMonth][day]['photos'];
      if (photoCount === 0) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-white';
      } else if (photoCount === 1) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-blue-500/[0.1]';
      } else if (photoCount === 2) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-blue-500/[0.2]';
      } else if (photoCount === 3) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-blue-500/[0.3]';
      } else if (photoCount === 4) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-blue-500/[0.4]';
      } else if (photoCount === 5) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-blue-500/[0.5]';
      } else if (photoCount === 6) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-blue-500/[0.6]';
      } else if (photoCount === 7) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-blue-500/[0.7]';
      } else if (photoCount === 8) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-blue-500/[0.8]';
      } else if (photoCount === 9) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-blue-500/[0.9]';
      } else if (photoCount >= 10) {
        DUMMY_DATA[thisYear][thisMonth][day]['bg'] = 'bg-blue-500/[0.5]';
      }
    }

    console.log(DUMMY_DATA);
  };

  const previousMonth = () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    render();
  };

  const nextMonth = () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    render();
  };

  const getSelectedDay = (day) => {
    selectedDay = day;
  }
</script>

<div class="calendar">
  <div class="header flex items-center justify-between my-6">
    <div class="h-6 w-6 flex items-center justify-center mx-4">
      <button class="h-6 w-6 rounded" on:click={previousMonth}
        ><i class="fa-solid fa-chevron-left" /></button
      >
    </div>

    <h2 class="text-lg font-semibold">
      {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
    </h2>
    <div class="h-6 w-6 flex items-center justify-center mx-4">
      <button class="h-6 w-6 rounded" on:click={nextMonth}
        ><i class="fa-solid fa-chevron-right" /></button
      >
    </div>
  </div>

  <div class="weekDays grid grid-cols-7 border-l border-gray-500">
    {#each weekDays as weekDay}
      <div
        class="bg-gray-200 text-gray-800 border-r border-y border-gray-500 py-2 text-center text-sm"
      >
        {weekDay}
      </div>
    {/each}
  </div>

  <div class="grid grid-cols-7 border-l border-gray-500">
    {#each days as { day, weekDay }}
      <button class="relative" style="padding-bottom:100%" on:click={getSelectedDay(day)}>
        <div
          class={`${
            day !== '' ? DUMMY_DATA[thisYear][thisMonth][day]['bg'] : 'bg-white'
          } border-r border-b border-gray-500 p-3 flex flex-col items-center justify-center absolute w-full h-full cursor-pointer hover:opacity-70`}
        >
          <div class="text-medium font-medium">{day}</div>
          <!-- <div class="text-sm">{weekDay}</div> -->
        </div>
      </button>
    {/each}
  </div>

  <div class="todayImage relative">
    {#if selectedDay}
      <hr class="border-2 border-solid border-blue-400 mt-8">
      <hr class="border-l-4 border-blue-400 h-80 ml-12">
      <div class="absolute top-8 left-11 flex items-center">
        <div class="rounded-full w-3 h-3 bg-blue-700"></div>
        <div class="ml-3 text-lg font-semibold">{`${thisYear}년 ${thisMonth}월 ${selectedDay}일`}</div>
      </div>
    {/if}
  </div>
</div>
