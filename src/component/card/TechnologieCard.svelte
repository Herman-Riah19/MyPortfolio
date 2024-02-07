<script lang="ts">
  import ResumeItem from "../container/ResumeItem.svelte";
  import TextGradient from "../typography/TextGradient.svelte";
  import TextMuted from "../typography/TextMuted.svelte";

  export let technologie = {};
  const listeStartValidate = [];
</script>

<div class="col-lg-2 col-md-4 col-sm-8 col-xs-12 mt-5">
  <div class="card justify-content-center text-center">
    <div class="justify-content-center">
      <img
        class="img-fluid"
        src={technologie.icon}
        alt={technologie.name}
        width="100"
        height="50"
      />
    </div>

    <div class="card-body text-center">
      <strong>
        <TextGradient>{technologie.name}</TextGradient>
      </strong> <br />
      {#if technologie.language}
        <TextMuted>{technologie.language}</TextMuted>
      {/if}
      {#each [1, 2, 3, 4, 5] as item}
        {#if item <= technologie.star}
          <TextGradient>
            <i class="bi bi-star-fill" />
          </TextGradient>
        {:else}
          <TextGradient>
            <i class="bi bi-star" />
          </TextGradient>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .card {
    height: 250px;
    border: none;    

    img {
        height: 100px;
        width: 100px;
    }
  }
</style>
