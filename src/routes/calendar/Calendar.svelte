<script>
	export let date;

	const week = { 0: 'SUN', 1: 'MON', 2: 'TUE', 3: 'WED', 4: 'THU', 5: 'FRI', 6: 'SAT' };

	const getDaysLength = (nowYear, nowMonth) => {
		return new Date(nowYear, nowMonth + 1, 0).getDate();
	};

	const getDays = (nowYear, nowMonth) => {
		const days = [];
		const lastDay = new Date(nowYear, nowMonth + 1, 0).getDate();
		for (let i = 1; i <= lastDay; i++) {
			days.push(new Date(nowYear, nowMonth, i).getDay());
		}
		return days;
	};

	let dayNum;
	let dayStr;

	const updateCalendar = () => {
		const year = date.getFullYear();
		const month = date.getMonth();

		const daysInMonth = getDaysLength(year, month);
		dayStr = getDays(year, month);
		console.log(daysInMonth);

		dayNum = Array.from({ length: daysInMonth }, (_, i) => i + 1);
	};

	$: {
		updateCalendar();
	}
</script>

<div class="flex items-center justify-between pt-12 overflow-x-auto">
	<table class="calendar w-full">
		<thead>
			<tr>
				<th>
					<div class="w-full flex justify-center">
						<p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
					</div>
				</th>
				<th>
					<div class="w-full flex justify-center">
						<p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
					</div>
				</th>
				<th>
					<div class="w-full flex justify-center">
						<p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">We</p>
					</div>
				</th>
				<th>
					<div class="w-full flex justify-center">
						<p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
					</div>
				</th>
				<th>
					<div class="w-full flex justify-center">
						<p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
					</div>
				</th>
				<th>
					<div class="w-full flex justify-center">
						<p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
					</div>
				</th>
				<th>
					<div class="w-full flex justify-center">
						<p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
					</div>
				</th>
			</tr>
		</thead>
		{#each dayNum as day}
			<p class="day">{day}</p>
		{/each}
		{#each dayStr as day}
			<p>{week[day]}</p>
		{/each}
	</table>
</div>
