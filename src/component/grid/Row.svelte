<script lang="ts">
export let classname: string = ""
</script>
<div class="row {classname}">
    <slot></slot>
</div>
<style lang="scss">
    .row {
        margin: 55px;
    }
</style>