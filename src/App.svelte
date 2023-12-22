<script lang="ts">
  import Projects from "./component/Projects.svelte";
  import Carouselle from "./component/container/Carouselle.svelte";
  import Container from "./component/container/Container.svelte";
  import Framework from "./component/container/Framework.svelte";
  import Services from "./component/container/Services.svelte";
  import SectionTitle from "./component/typography/SectionTitle.svelte";
  import ShadowContainer from "./component/container/ShadowContainer.svelte";
  import Resume from "./component/Resume.svelte";
  import Contact from "./component/container/Contact.svelte";
  import Navbar from "./component/header/Navbar.svelte";
  import Footer from "./component/Footer.svelte";
  import { onMount } from "svelte";
  import anime from "animejs";

  let gradientCard: any, titleAnimate: any;

  const animation = (targets: any) => ({
    targets,
    translateX: [-1000, 1],
    direction: "alternate",
  });

  const setup = () => {
    anime
      .timeline({
        easing: "easeInSine",
        autoplay: true,
        duration: 1000,
      })
      .add(animation(gradientCard));
  };

  onMount(setup);
</script>

<div>
  <Navbar />
  <main role="main" class="main">
    <Carouselle/>
      
    <Container>
      <Services />
      <Projects />
      <ShadowContainer>
        <Resume />
      </ShadowContainer>

      <Container id="technologies">
        <SectionTitle>Technologies</SectionTitle>
        <Framework />
      </Container>
      <Contact />
    </Container>
  </main>
  <Footer />
</div>
