<script lang="ts">
	import { animate } from 'motion';

	let show = $state(false);
	let text = $state('wtf');
	let eText = $state('🦜🦜🦜');

	const runAction = (e: HTMLElement, text: string) => {
		text = 'banananana 🍌';
		const eTextEvent = new CustomEvent('eTextEvent', { detail: 'Aditya' });
		e.dispatchEvent(eTextEvent);
		return {
			update(text: string) {
				text = 'blah blah 🦜';
				animate('button', { backgroundColor: 'red' });
			},
			destroy() {
				text = 'kaboom 💣';
			}
		};
	};

	function handleCustom(eve: Event): void {
		console.log('heeeee');
		if ('detail' in eve && typeof eve.detail === 'string') {
			eText = eve?.detail;
		} else {
			eText = 'blah blah';
		}
	}
</script>

<div class="flex flex-col items-center gap-5 justify-center">
	<input type="checkbox" name="show" id="show" bind:checked={show} class="bg-blue-200 size-4" />

	{#if show}
		<button
			class="bg-blue-500 px-1 py-2 text-lg text-white"
			oneTextEvent={handleCustom}
			use:runAction={text}
		>
			Run Animation.
		</button>
	{/if}
</div>

<h1 class="text-4xl text-center">
	{text}
</h1>

<input
	type="text"
	name="text"
	id="text"
	class="ring-2 w-30 h-10 rounded-sm text-md ring-red-500"
	bind:value={text}
/>

<h1 class="text-4xl text-center">
	{eText}
</h1>
