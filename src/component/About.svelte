<script>
  import Container from "./container/Container.svelte";
  import SectionTitle from "./typography/SectionTitle.svelte";
</script>

<section id="about">
  <Container classname="px-3">
    <div class="row gx-5 justify-content-center">
      <div class="col-xxl-8">
        <div class="text-left my-5">
          <SectionTitle>About me</SectionTitle>
          <p class="text-muted">
            I am a web developer, specializing in the development of dynamic web
            applications, build a digital solution for the management and make
            the technologie dream into the reality using the interactives
            experiences and can answer different data processing problems in a
            company.
          </p>
        </div>
      </div>
    </div></Container
  >
</section>

<style>
  #about {
    padding-top: 85px;
  }
</style>
