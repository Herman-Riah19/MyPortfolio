
<script lang="ts">
export let classname: string = ""
export let id: string = ""
</script>
<div class="container {classname}" id="{id}">
    <slot></slot>
</div>
