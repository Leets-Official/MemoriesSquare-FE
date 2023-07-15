<script>
	import Calendar from './calendar/Calendar.svelte';
	import ImageModal from "./calendar/imageupload/ImageModal.svelte";
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

<style>
	/* :global(body) {
		background: linear-gradient(#f0ffff, #ccffff, #9afeff);
		background-repeat: no-repeat;
		background-attachment: fixed;
	} */
</style>
