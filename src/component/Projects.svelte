<script lang="ts">
    import Container from "./container/Container.svelte";
    import SectionTitle from "./typography/SectionTitle.svelte";
    import Row from "./grid/Row.svelte";
    import Column from "./grid/Column.svelte";
    import ProjectCard from "./card/ProjectCard.svelte";
  import { ProjectModel } from "../model/ProjectModel";
</script>
<section id="projects">
  <Container>
    <SectionTitle>Projects</SectionTitle>
    <Row>
      {#each ProjectModel as projet}
        <Column>
          <ProjectCard project={projet} />
        </Column>
      {/each}
    </Row>
  </Container>
</section>

<style lang="scss">
  #projects{
    padding-top: 100px;
    padding-bottom: 100px;
  }
</style>
