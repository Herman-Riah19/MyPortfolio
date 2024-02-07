<script lang="ts">
  import Profile from "../../assets/image/profile-remove.png";
  import Dots from "./Dots.svelte";
  import Badge from "../tools/Badge.svelte";
  import TextGradient from "../typography/TextGradient.svelte";
  import SectionTitle from "../typography/SectionTitle.svelte";
  import Row from "../grid/Row.svelte";
  import Information from "./Information.svelte";
  import { onMount } from "svelte";
  import anime from "animejs";
  import {
    textAnimation,
    animationAlternateLeft,
  } from "../../animation/animate";

  export let gradientCard: any,
    titleAnimate: any,
    infoAnimate: any,
    linkAnimate: any;
    
  const setupCarouselleAnimate = () => {
    anime
      .timeline({
        easing: "easeInSine",
        autoplay: true,
        duration: 1000,
      })
      .add(textAnimation(titleAnimate))
      .add(animationAlternateLeft(gradientCard))
      .add(textAnimation(infoAnimate))
      .add(animationAlternateLeft(linkAnimate));
  };
  onMount(setupCarouselleAnimate);
</script>

<section id="home" class="container">
  <div class="row gx-5 align-items-center">
    <div class="col-xxl-5">
      <!-- Header text content-->
      <div class="text-center text-xxl-start" bind:this={titleAnimate}>
        <Badge
          >Designer UI/UX &middot; Développeur Web &middot; Data Analyst</Badge
        >
        <div class="fs-3 fw-light text-muted">Bonjour! Je m'appelle</div>
        <SectionTitle>Hermann Christian</SectionTitle>
        <h1 class="display-3 fw-bolder mb-1">
          <TextGradient>RAZAFINDRANAIVO</TextGradient>
        </h1>
        <TextGradient>hermannchristianr@gmail.com</TextGradient>
      </div>
    </div>
    <div class="col-xxl-5">
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
    <!-- Header profile picture-->
    <div class="col-xxl-5">
      <div class="d-flex justify-content-center mt-xxl-0">
        <Row>
          <div class="contact" bind:this={linkAnimate}>
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
                <a
                  href="https://www.linkedin.com/in/hermann-razafindranaivo-174378237/"
                  class="instagram"
                >
                  <TextGradient><i class="bx bxl-linkedin" /></TextGradient>
                </a>
                <a
                  href="https://www.github.com/Herman-Riah19"
                  class="instagram"
                >
                  <TextGradient><i class="bx bxl-github" /></TextGradient>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </div>
      <div class="d-flex align-items-center mt-5 p-8" bind:this={infoAnimate}>
        <Information />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  #home {
    padding-top: 100px;
  }
  .contact .social-links {
    padding-bottom: 10px;
  }

  .contact .social-links a {
    font-size: 32px;
    display: inline-block;
    background: #fff;
    line-height: 0;
    padding: 5px;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
  }

  .contact .info {
    color: #5a656e;
  }

  .contact .info i {
    font-size: 30px;
    color: #d43076;
    line-height: 0;
    margin-right: 30px;
  }

  .contact .info p {
    font-size: 14px;
    margin-left: 10px;
  }

  .contact .php-email-form .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
  }

  .contact .php-email-form .error-message br + br {
    margin-top: 25px;
  }

  .contact .php-email-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .contact .php-email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }

  .contact .php-email-form .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }

  .contact .php-email-form input,
  .contact .php-email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
  }

  .contact .php-email-form input:focus,
  .contact .php-email-form textarea:focus {
    border-color: #d43076;
  }

  .contact .php-email-form button[type="submit"] {
    background: #d43076;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
  }

  .contact .php-email-form button[type="submit"]:hover {
    background: #dd5a92;
  }
</style>
