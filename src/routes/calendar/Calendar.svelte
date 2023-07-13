<script>
	import { onMount } from "svelte";

	let DUMMY_DATA = {
        2023 : {
            7 : {
                1: {
					"weekDay": "imsy",
					"photos": 4,
				},
				6: {
					"photos": 6,
				},
				7: {
					"photos": 1,
				}
            }
        }
    }
	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let currentDate = new Date();
	let thisYear, thisMonth;
	let days = [];
	
	onMount(() => {
		render();
	});

	const render = () => {
		[thisYear, thisMonth] = [currentDate.getFullYear(), currentDate.getMonth() + 1];
		const firstDay = new Date(thisYear, thisMonth - 1, 1).getDay();
		const daysInMonth = new Date(thisYear, thisMonth, 0).getDate();
		days = Array.from({length: daysInMonth + firstDay}, (_, idx) => {
			const day = idx + 1 - firstDay;
			const weekDay = weekDays[idx % 7];
			return {
				day: day > 0 ? day : "",
				weekDay : weekDay
			};
		});

		// 이번 달의 DUMMY_DATA 초기화
		if(!(thisYear in DUMMY_DATA)){
			DUMMY_DATA[thisYear] = {};
		}
		if (!(thisMonth in DUMMY_DATA[thisYear])){
			DUMMY_DATA[thisYear][thisMonth] = {};
		}
		days.forEach(eachDay => {
			if(eachDay.day !== "" && !(eachDay.day in DUMMY_DATA[thisYear][thisMonth])){
				DUMMY_DATA[thisYear][thisMonth][eachDay.day] = {"weekDay": eachDay.weekDay, "photos":0, "bg": "bg-white"};
			}
		})
		// DUMMY_DATA의 background color 초기화
		for (const day in DUMMY_DATA[thisYear][thisMonth]){
			const photoCount = DUMMY_DATA[thisYear][thisMonth][day]["photos"];
			if(photoCount > 5){
				DUMMY_DATA[thisYear][thisMonth][day]["bg"] = "bg-green-400";
			} else if (photoCount > 3){
				DUMMY_DATA[thisYear][thisMonth][day]["bg"] = "bg-green-500";
			} else if (photoCount > 0){
				DUMMY_DATA[thisYear][thisMonth][day]["bg"] = "bg-green-600";
			}
		}
		console.log(DUMMY_DATA)
	};

	const previousMonth = () => {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
		render();
	}

	const nextMonth = () => {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
		render();
	};
</script>

<div class="calendar">
	<div class="header flex items-center justify-between mb-8 mt-8"> 
		<button class="px-4" on:click={previousMonth}>{"<"}</button>
		<h2 class="text-lg font-semibold">
			{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
		</h2>
		<button class="px-4" on:click={nextMonth}>{">"}</button>
	</div>

	<div class="weekDays grid grid-cols-7">
		{#each weekDays as weekDay}
			<div class="bg-gray-200 text-gray-800 border-r border-y border-gray-500 py-2 text-center">{weekDay}</div>
		{/each}
	</div>

	<div class="grid grid-cols-7">
		{#each days as { day, weekDay }}
			<div class={`${day !== "" ? DUMMY_DATA[thisYear][thisMonth][day]["bg"] : "bg-white"} border-r border-b border-gray-500 p-4 flex flex-col items-center justify-center`}>
				<div class="text-medium font-semibold">{day}</div>
				<div class="text-sm">{weekDay}</div>
			</div>
		{/each}
	</div>
</div>