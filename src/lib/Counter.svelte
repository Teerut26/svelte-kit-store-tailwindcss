<script lang="ts">
	import { counterStoreAction } from './stores/counterStore';
</script>

<div class="flex gap-3">
	<div
		on:click={() => counterStoreAction.increase()}
		class="p-3 bg-green-500 flex justify-center text-white rounded-xl cursor-pointer"
	>
		increase
	</div>
	<div
		on:click={() => counterStoreAction.decrease()}
		class="p-3 bg-red-500 flex justify-center text-white rounded-xl cursor-pointer"
	>
		decrease
	</div>
</div>
