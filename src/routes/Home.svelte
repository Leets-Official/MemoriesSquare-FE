<script>
	// const Calender = () => {
	// 	console.log(new Date());
	// 	let nowMonth = new Date().getMonth(); // month는 0부터 시작
	// };
	// let nowMonth = new Date();
	// let firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
	// let lastDay = `${new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)}`.split(' ');
	import Calendar from './calendar/Calendar.svelte';
	let currentDate = new Date();
</script>

<section class="m-0">
	<div class="pt-10">
		<p class="text-3xl text-center">Memories Square</p>
		<!-- <div>{nowMonth}</div>
		<div>{lastDay}</div> -->
		<div><Calendar date={currentDate} /></div>
	</div>
</section>

<style>
	/* :global(body) {
		background: linear-gradient(#f0ffff, #ccffff, #9afeff);
		background-repeat: no-repeat;
		background-attachment: fixed;
	} */
</style>
