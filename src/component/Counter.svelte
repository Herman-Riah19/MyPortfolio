<script lang="ts">
    let count: number = 0
</script>

<p>Count: {count}</p>

<button on:click={() => count++}>Increment</button>
<button on:click={() => count--}>Increment</button>