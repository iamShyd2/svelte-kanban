<script>
	import { tasks } from '../store.js';
	export let state;
	import { dndzone } from "svelte-dnd-action";

	let dropTargetStyle;

	function handleSort(e){
		items = e.detail.items;
		console.log(e.detail);

		let dropTargetStyle;
		dropTargetStyle = {
			"outline": "unset"
		};
	}

	let items = [];

	tasks.subscribe(tasks => {
		items = tasks.filter(item => item.state == state)
	});
</script>

<section class="state">
	<h4>{state} <span>{items.length}</span></h4>
	<div>
		<ul use:dndzone={{items, dropTargetStyle}} on:consider={handleSort} on:finalize={handleSort} class="list-unstyled">
			{ #each items as task(task.id) }
				<li class="task">
					<div>
						<p>{task.name}</p>
					</div>
					<div>
						<p class="category {task.category}">{task.category}</p>
					</div>
				</li>
			{ /each }
		</ul>
	</div>
</section>

<style>
	section{
		width: 400px;
	}
	h4{
		font-weight: 300;
		font-size: 20px;
	}
	h4 span{
		background-color: #dbdbdb;
		padding: 5px;
		font-size: 13px !important;
		margin-left: 10px;
		border-radius: 10px;
	}
	ul{
		min-height: 100px;
	}
	p{
		margin: 0;
	}
	.state > div {
		margin-top: 20px;
	}
	.task{
		background-color: #fff;
		border-radius: 10px;
		padding: 10px 20px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		display: flex;
		justify-content: space-between;
		align-items: first baseline;
		cursor: pointer;
	}
	.task:not(:first-child){
		margin-top: 20px;
	}
	.category{
		border-radius: 10px;
		background-color: #ef89e7;
		color: #990199;
		display: inline-block;
		padding: 5px 10px;
		font-size: 12px;
		margin-top: 10px;
	}
	.category.Bug{
		background-color: #f99797;
		color: #df0101;
	}
	.category.UI{
		background-color: #7ff57f;
		color: #008000;
	}
</style>
