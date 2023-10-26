<script>
  import Row from "../grid/Row.svelte";
  import SectionTitle from "../typography/SectionTitle.svelte";
  import Container from "./Container.svelte";
  import ShadowContainer from "./ShadowContainer.svelte";
  import { ServiceModel } from "../../model/ServiceModel";
  import ServiceCard from "../card/ServiceCard.svelte";
  import TextGradient from "../typography/TextGradient.svelte";
</script>

<section id="service">
  <Container>
    <SectionTitle>Services</SectionTitle>
    <ShadowContainer>
      <div class="d-flex align-items-center mb-4">
        <div
          class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
        >
          <i class="bx bx-server" />
        </div>
        <SectionTitle>Professional Skills</SectionTitle>
      </div>
      <Row>
        {#each ServiceModel as service}
          <ServiceCard {service} />
        {/each}
      </Row>
    </ShadowContainer>
  </Container>
</section>

<style lang="scss">
  #service{
    padding-top: 100px;
  }
</style>