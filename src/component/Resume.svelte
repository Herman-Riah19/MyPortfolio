<script lang="ts">
  import SectionTitle from "./typography/SectionTitle.svelte";
  import TextGradient from "./typography/TextGradient.svelte";
  import Container from "./container/Container.svelte";
  import ResumeItem from "./container/ResumeItem.svelte";
  import ResumeCard from "./card/ResumeCard.svelte";
  import StudyCard from "./card/StudyCard.svelte";
  import { diplome, experience, formation } from "../model/ResumeModel";
</script>

<section id="resumes" class="resume">
    <SectionTitle>Résumés</SectionTitle>

    <Container>
      <div class="d-flex align-items-center mb-4">
        <div
          class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
        >
          <i class="bi bi-tools" />
        </div>
        <h3 class="fw-bolder mb-0">
          <TextGradient>Expériences Professionnelles </TextGradient>
        </h3>
      </div>
      {#each experience as item}
        <ResumeCard model={item} />
      {/each}
    </Container>
    <Container>
      <div class="d-flex align-items-center mb-4">
        <div
          class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
        >
          <i class="bi bi-book" />
        </div>
        <h3 class="fw-bolder mb-0">
          <TextGradient>Etudes </TextGradient>
        </h3>
      </div>
      {#each diplome as item}
        <StudyCard model={item} />
      {/each}
    </Container>
</section>

<style lang="scss">
  .resume {
    padding-top: 100px;
    
    .resume-title {
      font-size: 26px;
      font-weight: 700;
      margin-top: 20px;
      margin-bottom: 20px;
      color: #e21e80;
    }

    .resume-item {
      padding: 0 0 20px 20px;
      margin-top: -2px;
      border-left: 5px solid #e21e80;
      position: relative;

      h4,
      h5 {
        line-height: 20px;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #e21e80;
        margin-bottom: 10px;
        margin-left: 10px;
      }

      .title {
        line-height: 20px;
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #e21e80;
        margin-bottom: 10px;
        margin-left: 10px;
      }

      .date {
        font-size: 16px;
        color: rgba(19, 40, 87, 0.938);
        padding: 5px 15px;
        display: inline-block;
        font-weight: 600;
        margin-bottom: 10px;
      }

      p {
        font-size: 15px;
        text-align: justify;
        padding-left: 20px;

        em {
          font-size: 17px;
          font-style: italic;
          font-weight: 400;
        }
      }

      ul {
        padding-left: 20px;

        li {
          padding-bottom: 10px;
        }
      }

      &:last-child {
        padding-bottom: 0;
      }

      &::before {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 20px;
        left: -11px;
        top: 0;
        background: #db609e;
        border: 2px solid #e21e80;
      }
    }
  }
</style>
