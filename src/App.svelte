<script>
	import Column from "./components/Column.svelte";

	let states = [
		"New",
		"In Progress",
		"Pending Approval",
		"Approved",
	];

</script>

<div>
	{ #each states as state }
		<Column
			state={state}
		/>
	{ /each }
</div>

<style>
 div{
	 display: flex;
	 padding: 120px;
 }
</style>
