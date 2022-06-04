<script lang="ts">
  import { color } from "../store";
import ColorForm from "./ColorForm.svelte";

</script>

<div class="full" style="background-color: {$color.value}">
  <span class="label contrast" style="color: {$color.value}">
    {$color.value}
  </span>

  copy it!

  <ColorForm />
</div>

<style>
  .label {
    font-size: 10vw;
    font-weight: bold;
  }
</style>
