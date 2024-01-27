<script lang="ts">
import TextGradient from "../typography/TextGradient.svelte";
import TextMuted from "../typography/TextMuted.svelte";
import {type ResumeModel} from "../../model/ResumeModel";
import Badge from "../tools/Badge.svelte";

export let model: ResumeModel = {}
</script>

<div class="card shadow border-0 rounded-4 mb-5">
  <div class="card-body p-5">
    <div class="row align-items-center gx-5">
      <div class="col text-center text-lg-start mb-4 mb-lg-0">
        <div class="bg-light p-4 rounded-4">
          <div class="row">
            <div class="col-sm-8">
              <h4 class="text-uppercase">
                <TextGradient>{model.title}</TextGradient>
              </h4>

              <div class="small fw-bolder">{model.institute}</div>

              <TextMuted>{model.city}</TextMuted>
            </div>
            <div class="col-sm-4">
              <Badge>{model.date}</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .text-justify {
    font-size: 15px;
    text-align: justify;
  }
</style>
