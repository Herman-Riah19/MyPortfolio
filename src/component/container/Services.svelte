<script>
import Row from "../grid/Row.svelte";
import SectionTitle from "../typography/SectionTitle.svelte";
import Container from "./Container.svelte";
import ShadowContainer from "./ShadowContainer.svelte";
import { ServiceModel } from "../../model/ServiceModel"
import ServiceCard from "../card/ServiceCard.svelte";
</script>
<Container>
    <SectionTitle>Services</SectionTitle>
    <ShadowContainer>
        <div class="d-flex align-items-center mb-4">
            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Professional Skills</span></h3>
        </div>
        <Row>
            {#each ServiceModel as service}
                <ServiceCard service={service}/>
            {/each}
        </Row>
    </ShadowContainer>
</Container>