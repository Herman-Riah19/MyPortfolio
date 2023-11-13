
<script lang="ts">
import TextGradient from "../typography/TextGradient.svelte";
import TextMuted from "../typography/TextMuted.svelte";
import {type ResumeModel} from "../../model/ResumeModel";

export let model: ResumeModel = {}
</script>
<div class="card shadow border-0 rounded-4 mb-5">
  <div class="card-body p-5">
    <div class="row align-items-center gx-5">
      <div class="col text-center text-lg-start mb-4 mb-lg-0">
        <div class="bg-light p-4 rounded-4">
          <TextGradient>{model.date}</TextGradient>
          <div class="small fw-bolder">{model.title}</div>
          <div class="small fw-bolder text-gradient">{model.institute}</div>
          <div class="small text-muted">{model.city}</div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-8">
        <div>
          {@html model.description}
        </div>
      </div>
    </div>
  </div>
</div>
