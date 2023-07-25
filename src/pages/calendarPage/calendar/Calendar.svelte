<script>
  import { onMount } from 'svelte';
  import { access_token } from '../../../lib/store';
  import ImageHistory from './ImageHistory.svelte';

  // const imsy = {'2023-07-25': 5, '2023-07-24': 16, '2023-07-12': 1, '2023-07-13':2, '2023-07-14':4, '2023-07-15':6, '2023-07-16':8};
  
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  let currentDate = new Date();
  let thisYear = currentDate.getFullYear();
  let thisMonth = currentDate.getMonth() + 1;
  let days = [];
  let selectedDay = '';
  let userImageData;
  let imageCounts;
  let selectedDayImages = [];
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  }

  onMount(async() => {
    userImageData = await getUserImageData();
    userImageData = getOnlyCroppedImage(userImageData['result']);
    const thisMonthImageCounts = await getImageCounts();
    imageCounts = thisMonthImageCounts['result']['count'];
    console.log(imageCounts)
    console.log(userImageData)
    render();
  });

  const getImageCounts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/photo/count?year=${thisYear}&month=${thisMonth}`, {
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + $access_token
        },
      });

      if (res.ok) return await res.json();
      throw new Error('Fail for getting data.');
    } catch (e) {
      alert("이번달 이미지들을 받아오지 못했습니다.")
      console.error(e);
    }
  };

  const getUserImageData = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/photo`, {
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + $access_token
        },
      });

      if (res.ok) return await res.json();
      throw new Error('Fail for getting data.');
    } catch (e) {
      alert("유저 날짜 데이터를 받아오지 못했습니다.")
      console.error(e);
    }
  };

  const getOneDayImages = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/photo/date?date=${thisYear}-${(thisMonth < 10) ? `0${thisMonth}` : thisMonth}-${(selectedDay < 10) ? `0${selectedDay}` : selectedDay}`, {
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + $access_token
        },
      });

      if (res.ok) return await res.json();
      throw new Error('Fail for getting data.');
    } catch (e) {
      alert("특정 날짜 이미지를 받아오지 못했습니다.")
      console.error(e);
    }
  };

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
  };

  const previousMonth = () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    render();
  };

  const nextMonth = () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    render();
  };

  const getSelectedDay = async(day) => {
    selectedDay = day;

    if(selectedDay === "") return;
    
    selectedDayImages = await getOneDayImages();
    selectedDayImages = getOnlyCroppedImage(selectedDayImages['result']);
  }

  const getBackgroundColor = (count) => {
    // console.log("count : ", count);
    // if (count === 0 || count === undefined) return 'bg-white';
    // if (count < 10) return `bg-blue-500/[0.${count}]`;
    // else return 'bg-blue-500/[1]'; 
    console.log(count)
    let bgColor = 'bg-white';
    switch(count) {
      case 0: 
      case undefined: 
        break;
      case 1:
        bgColor = 'bg-blue-500/[0.1]';
        break;
      case 2:
        bgColor = 'bg-blue-500/[0.2]';
        break;
      case 3:
        bgColor = 'bg-blue-500/[0.3]';
        break;
      case 4:
        bgColor = 'bg-blue-500/[0.4]';
        break;
      case 5:
        bgColor = 'bg-blue-500/[0.5]';
        break;
      case 6:
        bgColor = 'bg-blue-500/[0.6]';
        break;
      case 7:
        bgColor = 'bg-blue-500/[0.7]';
        break;
      case 8:
        bgColor = 'bg-blue-500/[0.8]';
        break;
      case 9:
        bgColor = 'bg-blue-500/[0.9]';
        break;
      default:
        bgColor = 'bg-blue-500/[1]';
        break;
    }
    return bgColor;
  }

  const getOnlyCroppedImage = (datas) => {
    let obj = {};
    let idx = 0;
    Object.entries(datas).forEach(([key, value]) => {
      if (datas[key]['crop'] === true){
        obj[idx] = value;
        idx++;
      }
    })
    return datas.filter(data => data['crop'] === true);
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
    {#each days as { day}}
      <button class={`relative `} style="padding-bottom:100%" on:click={getSelectedDay(day)}>
        <div class={`
          ${(thisYear == today['year'] && thisMonth == today["month"] && day == today['day']) ? "shadow-today" : ""}
          ${day !== '' ? getBackgroundColor(imageCounts[`${thisYear}-${(thisMonth < 10) ? `0${thisMonth}` : thisMonth}-${(day < 10) ? `0${day}` : day}`]) : 'bg-white'} border-r border-b border-gray-500 p-3 flex flex-col items-center justify-center absolute w-full h-full cursor-pointer hover:opacity-70`
        }>
          <div class="text-medium font-medium">{day}</div>
        </div>
      </button>
    {/each}
  </div>

  <ImageHistory thisYear={thisYear} thisMonth={thisMonth} selectedDay={selectedDay} imageDatas={selectedDayImages}/>
</div>

<style>
  .shadow-today{
    box-shadow: inset 0 0 10px rgba(0, 110, 50, 0.5);
  }
</style>
