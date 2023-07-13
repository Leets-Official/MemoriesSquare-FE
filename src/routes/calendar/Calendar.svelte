<script>
	import { onMount } from "svelte";

	let DUMMY_DATA = {
        2023 : {
            7 : {
                1: {
					"weekDay": "imsy",
					"photos": 4,
				}
            }
        }
    }
	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const grassColor = ["#008000", "#32CD32", "#00FF00"]
	let currentDate = new Date();
	let days = [];
	
	onMount(() => {
		render();
	});

	const render = () => {
		const [thisYear, thisMonth] = [currentDate.getFullYear(), currentDate.getMonth()];
		const firstDay = new Date(thisYear, thisMonth, 1).getDay();
		const daysInMonth = new Date(thisYear, thisMonth + 1, 0).getDate();
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
		if (!((thisMonth + 1) in DUMMY_DATA[thisYear])){
			DUMMY_DATA[thisYear][thisMonth + 1] = {};
		}
		days.forEach(eachDay => {
			if(eachDay.day !== "" && !(eachDay.day in DUMMY_DATA[thisYear][thisMonth + 1])){
				DUMMY_DATA[thisYear][thisMonth + 1][eachDay.day] = {"weekDay": eachDay.weekDay, "photos":0};
			}
		})
		console.log(DUMMY_DATA);
	};

	const previousMonth = () => {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
		console.log(currentDate)
		render();
	}

	const nextMonth = () => {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
		render();
	};
	// render()
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
			<div class="border-r border-b border-gray-500 p-4 flex flex-col items-center justify-center">
				<div class="text-medium font-semibold">{day}</div>
				<div class="text-sm">{weekDay}</div>
			</div>
		{/each}
	</div>
</div>