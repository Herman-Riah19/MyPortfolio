<script lang="ts">
  import Row from "../grid/Row.svelte";
  import SectionTitle from "../typography/SectionTitle.svelte";
  import TextGradient from "../typography/TextGradient.svelte";
  import TextMuted from "../typography/TextMuted.svelte";
</script>

<section id="contact" class="contact">
    <SectionTitle>Contacts</SectionTitle>
    <Row>
      <div class="col-lg-5 d-flex align-items-stretch">
        <div class="info">
          <div class="d-flex align-items-center mb-4">
            <div
              class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
            >
              <i class="bi bi-geo-alt" />
            </div>
            <div class="d-inline">
              <TextGradient>Location:</TextGradient>
              <TextMuted>
                Lot IB 86 Antanambao Imeritsiatosika<br />
                Antananarivo, 101
              </TextMuted>
            </div>
          </div>

          <div class="d-flex align-items-center mb-4">
            <div
              class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
            >
              <i class="bi bi-envelope" />
            </div>
            <div class="d-inline">
              <TextGradient>Email:</TextGradient>
              <TextMuted>hermanrazafinbdranaivo@gmail.com</TextMuted>
            </div>
          </div>

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

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
            style="border:0; width: 100%; height: 290px;"
            allowfullscreen
          />
        </div>
      </div>

      <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form method="post" role="form" class="php-email-form">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="name">Your Name</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="name">Your Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="name">Subject</label>
            <input
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              required
            />
          </div>
          <div class="form-group">
            <label for="name">Message</label>
            <textarea class="form-control" name="message" rows="10" required />
          </div>
          <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message" />
            <div class="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div class="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
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
      box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
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
