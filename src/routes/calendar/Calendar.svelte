<script>
	let nowDate = new Date();

	const getDaysInMonth = (nowYear, nowMonth) => {
		return new Date(nowYear, nowMonth + 1, 0).getDate();
	};

	let nowDays;

	const updateCalendar = () => {
		const year = nowDate.getFullYear();
		const month = nowDate.getMonth();

		const daysInMonth = getDaysInMonth(year, month);

		nowDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
	};

	$: {
		updateCalendar();
	}
</script>

<div class="calendar">
	{#each nowDays as day (day)}
		<div class="day">{day}</div>
	{/each}
</div>
