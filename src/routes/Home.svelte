
<script lang="ts">
import About from "../component/About.svelte";
import ProjectCard from "../component/card/ProjectCard.svelte";
import Carouselle from "../component/container/Carouselle.svelte";
import Container from "../component/container/Container.svelte";
import Framework from "../component/container/Framework.svelte";
import Services from "../component/container/Services.svelte";
import Column from "../component/grid/Column.svelte";
import Row from "../component/grid/Row.svelte";
import SectionTitle from "../component/typography/SectionTitle.svelte";
import { ProjectModel } from "../model/ProjectModel";
</script>

<main role="main">
    <Carouselle/>
    <Container>
        <About />
        <Services />
        <Container>
            <SectionTitle>Projects</SectionTitle>
            <Row>
                {#each ProjectModel as projet}
                    <Column>
                        <ProjectCard project={projet}/>
                    </Column>
                {/each}
            </Row>
        </Container>
        <Container>
            <SectionTitle>Technologies</SectionTitle>
            <Framework />
        </Container>
    </Container>
</main>
