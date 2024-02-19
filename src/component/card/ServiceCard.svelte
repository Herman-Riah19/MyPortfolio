<script lang="ts">
  import type { Model } from "../../model/ServiceModel";
import TextGradient from "../typography/TextGradient.svelte";
import TextMuted from "../typography/TextMuted.svelte";
export let service: Model;
</script>
<div class="col mb-4 mb-md-0">
    <div class="align-items-center text-justify bg-light rounded-4 p-3 h-100">
        <h2 class="text-center">
            <TextGradient>{service.name}</TextGradient>
        </h2> <br/>
        <TextMuted>{service.description}</TextMuted>
    </div>
</div>

<style lang="scss">
    .text-justify {
        text-align: justify;
    }
</style>