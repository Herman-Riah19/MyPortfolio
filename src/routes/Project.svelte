<script lang="ts">
import Container from "../component/container/Container.svelte";
import Badge from "../component/tools/Badge.svelte";
import SectionTitle from "../component/typography/SectionTitle.svelte";
import TextMuted from "../component/typography/TextMuted.svelte";
import { ProjectModel } from "../model/ProjectModel";
import { onMount } from "svelte"
import anime from "animejs"

let card: any;

const animation = (targets: any) => ({
    targets,
    translateX: [-500, 1],
    direction: 'alternate',
})

const setup = () => {
    anime.timeline({
        easing: "easeInSine",
        autoplay: true,
        duration: 1000
    })
    .add(animation(card))
    
}

onMount(setup)
</script>
<main role="main">
    <Container classname="text-center justify-content-center align-items-center">
        <SectionTitle>Projects</SectionTitle>
        <div class="row gx-5 justify-content-center" bind:this={card}>
            {#each ProjectModel as project }
                <div class="col-lg-11 col-xl-9 col-xxl-8">
                    <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div class="card-body p-0">
                            <div class="d-flex align-items-center">
                                <div class="p-5">
                                    <h2 class="fw-bolder">{project.title}</h2>
                                    <TextMuted>{project.description}</TextMuted>
                                    <Badge>{project.technology}</Badge>
                                </div>
                                <img class="img-fluid" src={project.img} alt={project.name} />
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
            
        </div>
    </Container>
</main>
<style lang="scss">
    img{
        height: 200px;
    }
</style>
