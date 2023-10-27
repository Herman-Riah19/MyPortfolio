<script lang="ts">
import TextGradient from "../typography/TextGradient.svelte";
import TextMuted from "../typography/TextMuted.svelte";

export let technologie = {}
</script>

<div class="col-lg-2 col-md-4 col-sm-8 col-xs-12">
    <div class="card">
        <img class="img-fluid" src={technologie.icon} alt={technologie.name} width="100" height="50"/>
        <div class="card-body text-center">
            <strong>
                <TextGradient>{technologie.name}</TextGradient>
            </strong>
            <TextMuted>{technologie.language}</TextMuted>
        </div>
    </div>
</div>

<style lang="scss">
    .card {
        border: none;
    }
</style>