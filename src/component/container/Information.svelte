<script lang="ts">
  import SectionTitle from "../typography/SectionTitle.svelte";
  import TextMuted from "../typography/TextMuted.svelte";
  import ShadowContainer from "./ShadowContainer.svelte";
</script>

<ShadowContainer>
  <div class="content d-flex flex-column justify-content-center">
    <SectionTitle>À propos</SectionTitle>
    <TextMuted> 
      Je suis un développeur Full Stack avec une expertise approfondie en 
      Python, TypeScript, ReactJS, Adonis JS et Flask. J'ai déjà travaillé dans la création de divers applicatons web
      tel que les applications de gestion des entreprises, des sites e-commerce, des applications de crowdfunding
      en utilisant les moyens de payement traditionnelles avec les cartes bancaires ou des applications de paiements tiers
      et aussi en utilisant des Cryptomoneys, l'intégration des applicatoins décentralisés telle que les applications de 
      minages NFT, les SaaS décentralisés. Je dispose aussi des expériences sur les scriptings comme le web scraping, 
      génération des Leads, la création des robots faux visiteurs et même des Intelligences Artificielles
      pour de prediction et spécification des API ChatGPT. Je privilégie la résolution des problèmes complexes en offrant 
      des solutions innovantes et modernes en s’appuyant sur l’utilisation des outils modernes et révolutionnaires. 
    </TextMuted>
  </div>
</ShadowContainer>

<style>
  .text-justify{
    text-align: justify;
  }
</style>

