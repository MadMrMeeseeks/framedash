<script lang="ts">
	let dailyQuote =
		'"The way to get started is to quit talking and begin doing." — Walt Disney';

	// section heights (percent of viewport height)
	let topHeight = 40;
	let middleHeight = 35;
	let bottomHeight = 25;

	// current drag target
	let dragging: "top" | "middle" | null = null;

	function startDrag(section: "top" | "middle") {
		dragging = section;
		document.body.style.cursor = "row-resize";
	}

	function stopDrag() {
		dragging = null;
		document.body.style.cursor = "default";
	}

	function onDrag(e: MouseEvent) {
		if (!dragging) return;
		const delta = (e.movementY / window.innerHeight) * 100;

		if (dragging === "top") {
			topHeight = Math.min(80, Math.max(10, topHeight + delta));
			middleHeight = Math.min(80, Math.max(10, middleHeight - delta));
		} else if (dragging === "middle") {
			middleHeight = Math.min(80, Math.max(10, middleHeight + delta));
			bottomHeight = Math.min(80, Math.max(10, bottomHeight - delta));
		}
	}
</script>

<div
	class="min-h-screen flex flex-col bg-zinc-900 text-white select-none"
	on:mousemove={onDrag}
	on:mouseup={stopDrag}
	on:mouseleave={stopDrag}
	role="presentation"
>
	<!-- Top section: Camera placeholder -->
	<section
		class="border-b border-zinc-800 flex items-center justify-center"
		style={`height:${topHeight}vh`}
	>
		<h1 class="text-3xl text-zinc-500">Camera Placeholder</h1>
	</section>

	<!-- Divider between top and middle -->
	<div
		class="h-1 bg-zinc-700 cursor-row-resize"
		on:mousedown={() => startDrag("top")}
		role="separator"
		aria-label="Resize camera and quote sections"
	></div>

	<!-- Middle section: Daily Quote / Focus -->
	<section
		class="p-6 flex flex-col items-center justify-center border-b border-zinc-800"
		style={`height:${middleHeight}vh`}
	>
		<h2 class="text-xl uppercase tracking-wide text-zinc-400 mb-2">
			Daily Focus
		</h2>
		<p class="text-center text-2xl font-light max-w-[80%] leading-snug">
			{dailyQuote}
		</p>
	</section>

	<!-- Divider between middle and bottom -->
	<div
		class="h-1 bg-zinc-700 cursor-row-resize"
		on:mousedown={() => startDrag("middle")}
		role="separator"
		aria-label="Resize quote and Uptime Kuma sections"
	></div>

	<!-- Bottom section: Uptime Kuma -->
	<section
		class="flex items-center justify-center relative"
		style={`height:${bottomHeight}vh`}
	>
		<iframe
			src="http://kuma.local"
			class="absolute top-0 left-0 w-full h-full border-0"
			title="Uptime Kuma"
		></iframe>

	</section>
</div>
