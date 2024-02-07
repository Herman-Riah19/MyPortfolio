<script lang="ts">
  import {
    TechnologieModel,
    LanguagesModel,
    Tools,
    Database,
  } from "../../model/TechnologieModel";
  import TechnologieCard from "../card/TechnologieCard.svelte";
  import Row from "../grid/Row.svelte";
  import SectionTitle from "../typography/SectionTitle.svelte";
  import TextGradient from "../typography/TextGradient.svelte";
</script>

<div id="technologies" class="technologies">
  <SectionTitle>Technologies</SectionTitle>
  <div class="m-2">
    <div class="d-flex align-items-center mb-4">
      <div
        class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
      >
        <i class="bi bi-code-slash" />
      </div>
      <h3 class="fw-bolder mb-0">
        <TextGradient>Langages</TextGradient>
      </h3>
    </div>
    <Row>
      {#each LanguagesModel as tech}
        <TechnologieCard technologie={tech} />
      {/each}
    </Row>
  </div>
  <div class="m-2">
    <div class="d-flex mb-4">
      <div
        class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3"
      >
        <i class="bi bi-code-slash" />
      </div>
      <h3 class="fw-bolder mb-0">
        <span class="text-gradient d-inline">Framework</span>
      </h3>
    </div>
    <Row>
      {#each TechnologieModel as tech}
        <TechnologieCard technologie={tech} />
      {/each}
    </Row>
  </div>
  <div class="m-2">
    <div class="d-flex mb-2">
      <div
        class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3"
      >
        <i class="bi bi-code-slash" />
      </div>
      <h3 class="fw-bolder mb-0">
        <span class="text-gradient d-inline">Database</span>
      </h3>
    </div>
    <Row>
      {#each Database as tech}
        <TechnologieCard technologie={tech} />
      {/each}
    </Row>
  </div>
  <div class="mb-0">
    <div class="d-flex mb-4">
      <div
        class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3"
      >
        <i class="bi bi-code-slash" />
      </div>
      <h3 class="fw-bolder mb-0">
        <span class="text-gradient d-inline">Tools</span>
      </h3>
    </div>
    <Row>
      {#each Tools as tech}
        <TechnologieCard technologie={tech} />
      {/each}
    </Row>
  </div>
</div>

<style lang="scss">
  .technologies {
    margin-top: 120px;
    padding-top: 100px;
    padding-bottom: 130px;
  }
</style>
