<script lang="ts">
  import SectionTitle from "../typography/SectionTitle.svelte";
  import TextMuted from "../typography/TextMuted.svelte";
  import ShadowContainer from "./ShadowContainer.svelte";
</script>

<ShadowContainer classname="w-75">
  <div class="content d-flex flex-column justify-content-center">
    <SectionTitle>À propos</SectionTitle>
    <TextMuted> 
      Développeur Web avec des compétences solides en résolution des problèmes et une expérience reconnue dans la création et conception des applications web dynamiques en rendant compte la gestion des tâches, le travail d’équipe et l’utilisation des technologies web modernes.
    </TextMuted>
  </div>
</ShadowContainer>

<style>
  .text-justify{
    text-align: justify;
  }
</style>

