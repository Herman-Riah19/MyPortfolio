<script lang="ts">
  import TextGradient from "../typography/TextGradient.svelte";
  import TextMuted from "../typography/TextMuted.svelte";
  import Badge from "../tools/Badge.svelte";

  export let title: string = "";
  export let date: string = "";
  export let institute: string = "";
  export let city: string = "";
  export let description: string = "";
</script>

<div class="resume-item">
  <div class="row align-items-center gx-5">
    <div class="col-sm-8">
      <h4 class="text-uppercase">
        <TextGradient>{institute}</TextGradient>
      </h4>

      <div class="title">
        <span class="small fw-bolder">{title} : </span>

        <TextMuted>{city}</TextMuted>
      </div>
    </div>

    <div class="col-sm-4">
      <Badge>{date}</Badge>
    </div>
  </div>

  <p>{@html description}</p>
</div>

<style lang="scss">
  .resume-item {
    padding: 0 0 20px 20px;
    border-left: 5px solid #212529 ;
    position: relative;

    .title {
        display: flex;
        align-content: space-between;
    }

    p{
      text-align: justify;
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
      background: -webkit-linear-gradient(315deg, #1e30f3 0%, #212529 100%);;
      border: 2px solid #212529 ;
    }
  }
</style>
