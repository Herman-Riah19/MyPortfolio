<script lang="ts">
  import Profile from "../../assets/image/profile-remove.png";
  import SectionTitle from "../typography/SectionTitle.svelte";
  import TextMuted from "../typography/TextMuted.svelte";
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
      </div>
    </div>
  </div>
</div>
