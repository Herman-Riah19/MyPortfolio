<script lang="ts">
  import Profile from "../../assets/image/profile-remove.png";
  import Dots from "./Dots.svelte";
  import Badge from "../tools/Badge.svelte";
  import TextGradient from "../typography/TextGradient.svelte";
  import SectionTitle from "../typography/SectionTitle.svelte";
  import { onMount } from "svelte";
  import anime from "animejs";
  import Row from "../grid/Row.svelte";
  import Container from "./Container.svelte";

  let gradientCard: any, titleAnimate: any;

  const animation = (targets: any) => ({
    targets,
    translateX: [-1000, 1],
    direction: "alternate",
  });

  const textAnimation = (targets: any) => ({
    targets,
    translateX: [350, 1],
    direction: "alternate",
    loop: true,
  });

  const setup = () => {
    anime
      .timeline({
        easing: "easeInSine",
        autoplay: true,
        duration: 1000,
      })
      .add(textAnimation(titleAnimate))
      .add(animation(gradientCard));
  };

  onMount(setup);
</script>

<section id="home">
  <div class="row gx-5 align-items-center">
    <div class="col-xxl-5">
      <!-- Header text content-->
      <div class="text-center text-xxl-start" bind:this={titleAnimate}>
        <Badge>Designer &middot; Web Developer &middot; Data Analyses</Badge>
        <div class="fs-3 fw-light text-muted">Hi! My name is</div>
        <SectionTitle>Hermann Christian</SectionTitle>
        <h1 class="display-3 fw-bolder mb-1">
          <TextGradient>RAZAFINDRANAIVO</TextGradient>
        </h1>
      </div>
    </div>
    <div class="col-xxl-7">
      <!-- Header profile picture-->
      <div class="d-flex justify-content-center mt-xxl-0">
        <div
          class="profile bg-gradient-primary-to-secondary"
          bind:this={gradientCard}
        >
          <!-- TIP: For best results, use a photo with a transparent background like the demo example below-->
          <!-- Watch a tutorial on how to do this on YouTube (link)-->
          <img class="profile-img" src={Profile} alt="..." />
          <Dots />
        </div>
        <Container>
          <Row>
            <div class="contact">
              <div class="contact-about">
                <div class="social-links">
                  <a
                    href="https://www.facebook.com/riah.hermann/"
                    class="facebook"
                  >
                    <TextGradient><i class="bx bxl-facebook" /></TextGradient>
                  </a>
                  <a
                    href="https://www.instagram.com/riah.hermann"
                    class="instagram"
                  >
                    <TextGradient><i class="bx bxl-instagram" /></TextGradient>
                  </a>
                  <a href="https://www.linkedin.com/in/hermann-razafindranaivo-174378237/" class="instagram">
                    <TextGradient><i class="bx bxl-linkedin" /></TextGradient>
                  </a>
                  <a
                    href="https://www.github.com/Herman-Riah19"
                    class="instagram"
                  >
                    <TextGradient><i class="bx bxl-github" /></TextGradient>
                  </a>
                  <TextGradient><i class="bi bi-envelope" />hermanrazafinbdranaivo@gmail.com</TextGradient>
                  
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  #home {
    padding-top: 100px;
  }
</style>
