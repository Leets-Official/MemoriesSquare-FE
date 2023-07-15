<script>
	import Calendar from './calendar/Calendar.svelte';
	import ImageModal from "./imageupload/ImageModal.svelte";
</script>

<section class="m-0">
	<div class="pt-10">
		<p class="text-3xl text-center">Memories Square</p>
		<div class="float-right ">
			<ImageModal/>
		</div>
		<div class="clear-right mt-20">
			<Calendar/>
		</div>
	</div>
</section>
