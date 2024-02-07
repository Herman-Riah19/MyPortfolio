<script lang="ts">
  import Projects from "./component/Projects.svelte";
  import Carouselle from "./component/container/Carouselle.svelte";
  import Container from "./component/container/Container.svelte";
  import Framework from "./component/container/Framework.svelte";
  import Services from "./component/container/Services.svelte";
  import ShadowContainer from "./component/container/ShadowContainer.svelte";
  import Resume from "./component/Resume.svelte";
  import Contact from "./component/container/Contact.svelte";
  import Navbar from "./component/header/Navbar.svelte";
  import Footer from "./component/Footer.svelte";
  import BackToTop from "./component/button/BackToTop.svelte";
    
  import { contactCard1, contactCard2, contactCard3, contactCard4, gradientCard, infoAnimate, linkAnimate, titleAnimate } from "./animation/animate";

</script>

<div>
  <Navbar />
  <main role="main" class="main">
    <Carouselle gradientCard={gradientCard} titleAnimate={titleAnimate} infoAnimate={infoAnimate} linkAnimate={linkAnimate} />
    <Container>
      <Contact
        contactCard1={contactCard1} 
        contactCard2={contactCard2} 
        contactCard3={contactCard3} 
        contactCard4={contactCard4} />
    </Container>
    <Container>
      <Services />
      <Projects />
      <ShadowContainer>
        <Resume />
      </ShadowContainer>
      <Framework />
    </Container>
    <BackToTop/>
  </main>
  <Footer />
</div>
