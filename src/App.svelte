<script lang="ts">
  import About from "./component/About.svelte";
  import Projects from "./component/Projects.svelte";
  import Carouselle from "./component/container/Carouselle.svelte";
  import Container from "./component/container/Container.svelte";
  import Framework from "./component/container/Framework.svelte";
  import Services from "./component/container/Services.svelte";
  import Column from "./component/grid/Column.svelte";
  import Row from "./component/grid/Row.svelte";
  import SectionTitle from "./component/typography/SectionTitle.svelte";
  import Information from "./component/container/Information.svelte";
  import ShadowContainer from "./component/container/ShadowContainer.svelte";
  import Resume from "./component/Resume.svelte";
  import Contact from "./component/container/Contact.svelte";
  import Navbar from "./component/header/Navbar.svelte";
  import Footer from "./component/Footer.svelte";
</script>

<div >
  <Navbar />
  <main role="main" class="main">
    <Carouselle />
    <Container>
      <About />
      <Information />
      <Services />
      <ShadowContainer>
        <Resume />
      </ShadowContainer>
      <Projects />

      <Container>
        <SectionTitle>Technologies</SectionTitle>
        <Framework />
      </Container>
      <Contact />
    </Container>
  </main>
  <Footer />
</div>
