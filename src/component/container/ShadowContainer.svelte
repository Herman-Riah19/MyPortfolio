
<script lang="ts">
    export let classname: string = ""
    export let id: string = ""
</script>
<div class="card shadow border-0 rounded-4 mb-5 {classname}" id="{id}">
    <div class="card-body p-5">
        <slot></slot>
    </div>
</div>