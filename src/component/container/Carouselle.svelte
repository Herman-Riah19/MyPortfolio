<script lang="ts">
  import Profile from "../../assets/image/profile-remove.png";
  import Dots from "./Dots.svelte";
  import Badge from "../tools/Badge.svelte";
  import TextGradient from "../typography/TextGradient.svelte";
  import SectionTitle from "../typography/SectionTitle.svelte";
  import { onMount } from "svelte";
  import anime from "animejs";

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
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  #home{
    padding-top: 100px;
  }
</style>
