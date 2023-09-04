<script lang="ts">
import Container from "../container/Container.svelte";
import TextGradient from "./TextGradient.svelte";
export let position: string = "center"
</script>
<Container classname="text-{position} my-2">
    <h2 class="display-5 fw-bolder">
        <TextGradient>
            <slot></slot>
        </TextGradient>
    </h2>
</Container>