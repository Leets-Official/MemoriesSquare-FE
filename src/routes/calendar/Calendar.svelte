<script>
	import { onMount } from "svelte";

	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let currentDate = new Date();
	let days = [];
	
	onMount(() => {
		render();
	});

	const render = () => {
		const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
		const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
		days = Array.from({length: daysInMonth + firstDay}, (_, idx) => {
			const day = idx + 1 - firstDay;
			const weekDay = weekDays[idx % 7];
			return {
				day: day > 0 ? day : "",
				weekDay : weekDay
			};
		});
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
	render()
</script>

<div class="calendar">
	<div class="header flex items-center justify-between mb-8 mt-8"> 
		<button class="px-4" on:click={previousMonth}>{"<"}</button>
		<h2 class="text-lg font-semibold">
			{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
		</h2>
		<button class="px-4" on:click={nextMonth}>{">"}</button>
	</div>

	<div class="weekDays grid grid-cols-7 gap-2">
		{#each weekDays as weekDay}
			<div class="bg-gray-200 text-gray-800 py-2 text-center rounded">{weekDay}</div>
		{/each}
	</div>

	<div class="grid grid-cols-7 gap-2">
		{#each days as { day, weekDay }}
			<div class="border border-gray-200 rounded p-4 flex flex-col items-center justify-center">
				<div class="text-lg font-semibold">{day}</div>
				<div class="text-sm">{weekDay}</div>
			</div>
		{/each}
	</div>
</div>