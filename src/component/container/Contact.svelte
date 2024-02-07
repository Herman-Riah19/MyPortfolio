<script lang="ts">
  import anime from "animejs";
  import {
    animationAlternateLeft,
    animationAlternateRight,
  } from "../../animation/animate";
  import Row from "../grid/Row.svelte";
  import SectionTitle from "../typography/SectionTitle.svelte";
  import TextGradient from "../typography/TextGradient.svelte";
  import TextMuted from "../typography/TextMuted.svelte";
  import { onMount } from "svelte";
  export let contactCard1: any,
    contactCard2: any,
    contactCard3: any,
    contactCard4: any;
    
  const setupContactAnimation = () => {
    anime
      .timeline({
        easing: "easeInSine",
        autoplay: true,
        duration: 1000,
      })
      .add(animationAlternateLeft(contactCard1))
      .add(animationAlternateRight(contactCard2))
      .add(animationAlternateLeft(contactCard3))
      .add(animationAlternateRight(contactCard4));
  };
  onMount(setupContactAnimation);
</script>

<section id="contact" class="contact">
  <SectionTitle>Contacts</SectionTitle>
  <Row>
    <div class="col-lg-12 d-flex align-items-stretch">
      <div class="info">
        <Row>
          <div class="col-xs-12 col-sm-8 col-md-6" bind:this={contactCard1}>
            <div class="d-flex align-items-center mb-4">
              <div
                class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
              >
                <i class="bi bi-geo-alt" />
              </div>
              <div class="d-inline">
                <TextGradient>Location:</TextGradient>
                <TextMuted>
                  Antanambao Imeritsiatosika<br />
                  Antananarivo, 112
                </TextMuted>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-8 col-md-6" bind:this={contactCard2}>
            <div class="d-flex align-items-center mb-4">
              <div
                class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
              >
                <i class="bi bi-envelope" />
              </div>
              <div class="d-inline">
                <TextGradient>Email:</TextGradient>
                <TextMuted>hermannchristianr@gmail.com</TextMuted>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-8 col-md-6" bind:this={contactCard3}>
            <div class="d-flex align-items-center mb-4">
              <div
                class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
              >
                <i class="bi bi-phone" />
              </div>
              <div class="d-inline">
                <TextGradient>Call:</TextGradient>
                <TextMuted>+261338022616</TextMuted>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-8 col-md-6" bind:this={contactCard4}>
            <div class="d-flex align-items-center mb-4">
              <div
                class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
              >
                <i class="bx bxl-linkedin" />
              </div>
              <div class="d-inline">
                <TextGradient>Linkedin</TextGradient>
                <a href="https://www.linkedin.com/in/hermann-razafindranaivo-174378237/">
                <TextMuted>Hermann Razafindranaivo</TextMuted>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  </Row>
</section>

<style lang="scss">
  .contact {
    padding-top: 100px;
    padding-bottom: 130px;

    .info {
      padding: 30px;
      background: #fff;
      width: 100%;
    }
  }

  .contact .php-email-form {
    width: 100%;
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  }

  .contact .php-email-form .form-group {
    padding-bottom: 8px;
  }

  .contact .php-email-form .validate {
    display: none;
    color: red;
    margin: 0 0 15px 0;
    font-weight: 400;
    font-size: 13px;
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
    animation: animate-loading 1s linear infinite;
  }

  .contact .php-email-form .form-group {
    margin-bottom: 15px;
  }

  .contact .php-email-form label {
    padding-bottom: 8px;
  }

  .contact .php-email-form input,
  .contact .php-email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
  }

  .contact .php-email-form input {
    height: 44px;
  }

  .contact .php-email-form textarea {
    padding: 10px 15px;
  }

  .contact .php-email-form button[type="submit"] {
    background: #149ddd;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 4px;
  }

  .contact .php-email-form button[type="submit"]:hover {
    background: #37b3ed;
  }

  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
