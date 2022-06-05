<script lang="ts">
  import { getContrastingColor } from "../lib/colors";
  import { onMount } from "svelte";

  import { color } from "../store";
  import ColorForm from "./ColorForm.svelte";
  import CopyButton from "./CopyButton.svelte";

  let element;

  onMount(() => {
    let contrastedColor = getContrastingColor(window.getComputedStyle(element).backgroundColor);

    element.style.setProperty('--cme-color', contrastedColor);
  });
</script>

<div class="full" style="background-color: {$color.value}" bind:this={element}>
  <div class="label-wrapper">
    <span class="label contrast">
      {$color.value}
    </span>

    <CopyButton />
  </div>

  <ColorForm />
</div>

<style>
  .label {
    font-size: 10vw;
    font-weight: bold;
    display: block;
    margin-bottom: .25rem;
  }

  .label-wrapper {
    text-align: center;
  }
</style>
