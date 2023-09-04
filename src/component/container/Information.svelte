<script lang="ts">
import Profile from "../../assets/image/profile-remove.png"
import Row from "../grid/Row.svelte";
import SectionTitle from "../typography/SectionTitle.svelte";
import TextGradient from "../typography/TextGradient.svelte";
import TextMuted from "../typography/TextMuted.svelte";
import Container from "./Container.svelte";
</script>

<div class="container">
    <div class="row no-gutters">
        <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start">
          <div class="profile bg-gradient-primary-to-secondary" >
              <img class="profile-img" src={Profile} alt="..." />
          </div>
        </div>
        <div class="col-xl-7 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div class="content d-flex flex-column justify-content-center">
              <SectionTitle>Information about me</SectionTitle>
                <h3>Hermann Christian RAZAFINDRANAIVO </h3>
                <TextMuted>
          
                  I am a young web developer, specializing in the development of dynamic applications,
                  interactive and can answer different data processing problems in a company.
                  Full stack developer for 4 years and specialized in the development of dynamic applications such as web applications for data management, digital solutions for problems in a business, decentralized applications with the use of blockchains and smart contracts of cryptomoneys and analysis Datas
                </TextMuted> 
                <TextMuted>After obtaining my diploma, I participated in the design and development of several web application projects for various companies over the last 4 years of experience.</TextMuted>
                <section id="contact" class="contact section-bg">
                    <div class="container">
                        <SectionTitle>Contact</SectionTitle>

                        <Container>
                          <Row>
                              <div class="contact-about">
                                    <div class="social-links">
                                        <a href="https://www.facebook.com/riah.hermann/" class="facebook">
                                            <TextGradient><i class="bi bi-facebook"></i></TextGradient>
                                        </a>
                                        <a href="https://www.instagram.com/herikantl" class="instagram">
                                            <TextGradient><i class="bi bi-instagram"></i></TextGradient>
                                        </a>
                                    </div>
                              </div>
                              <div class="info">
                                <div class="d-flex align-items-center">
                                    <TextGradient><i class="bi bi-house"></i></TextGradient>
                                    <TextMuted>
                                      Lot IB 86 Antanambao Imeritsiatosika<br>
                                      Antananarivo, 101
                                    </TextMuted>
                                </div>

                                <div class="d-flex align-items-center">
                                    <TextGradient><i class="bi bi-envelope"></i></TextGradient>
                                    <TextMuted>hermannchristianr@gmail.com</TextMuted>
                                </div>

                                <div class="d-flex align-items-center">
                                    <TextGradient><i class="bi bi-phone"></i></TextGradient>
                                    <TextMuted>+261338022616</TextMuted>
                                </div>    
                            </div>
                          </Row>
                        </Container>
                    </div>
                </section>
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
    font-size: 32px;
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
  
  .contact .php-email-form input, .contact .php-email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
  }
  
  .contact .php-email-form input:focus, .contact .php-email-form textarea:focus {
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