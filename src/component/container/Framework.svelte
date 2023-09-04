<script lang="ts">
import {TechnologieModel} from "../../model/TechnologieModel"
import TechnologieCard from "../card/TechnologieCard.svelte";
import Column from "../grid/Column.svelte";
import Row from "../grid/Row.svelte";
import SectionTitle from "../typography/SectionTitle.svelte";
import ShadowContainer from "./ShadowContainer.svelte";

</script>
<ShadowContainer>
    <div class="mb-0">
        <div class="d-flex mb-4">
            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <i class="bi bi-code-slash"></i></div>
                <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Framework</span></h3>
        </div>
        <Row>
            {#each TechnologieModel as tech}
                <TechnologieCard technologie={tech}/>
            {/each}
        </Row>
    </div>
</ShadowContainer>