<script lang="ts">
  import Profile from "../../assets/image/profile-remove.png";
  import Row from "../grid/Row.svelte";
  import SectionTitle from "../typography/SectionTitle.svelte";
  import TextGradient from "../typography/TextGradient.svelte";
  import TextMuted from "../typography/TextMuted.svelte";
  import Container from "./Container.svelte";
</script>

<div class="container">
  <div class="row no-gutters">
    <div
      class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
    >
      <div class="profile bg-gradient-primary-to-secondary">
        <img class="profile-img" src={Profile} alt="..." />
      </div>
    </div>
    <div class="col-xl-7 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
      <div class="content d-flex flex-column justify-content-center">
        <SectionTitle>Information about me</SectionTitle>
        <h3>Hermann Christian RAZAFINDRANAIVO</h3>
        <TextMuted>
          I'm a fullstack developer for 4 years and specialized in the
          development of dynamic applications such as web applications for data
          management, digital solutions for problems in a business,
          decentralized applications using of the blockchains and smart
          contracts of cryptomoneys and analysis Datas with the Artificial
          Intelligence's integration, all them representing by a beautifull and
          interactive application with a modern and eleguante design
        </TextMuted>
        <TextMuted>
          After obtaining my Professional Degree in Computer Science,
          Electronics and Telecommunications, I participated in the design and
          development of several web application projects for various companies,
          individuals person and also my own personnal project.
        </TextMuted>
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
                  <a href="https://www.linkedin.com/" class="instagram">
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
        </Container>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .contact .social-links {
    padding-bottom: 50px;
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
