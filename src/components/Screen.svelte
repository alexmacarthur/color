<script lang="ts">
  import { getContrastingColor } from "../lib/colors";
  import { onMount } from "svelte";
  import { color } from "../store";
  import ColorForm from "./ColorForm.svelte";
  import CopyButton from "./CopyButton.svelte";
  import { afterFuturePaint } from "request-animation-helpers";

  let element;
  $: colorValue = $color.value;

  const updateContrastingColor = () => {
    let contrastedColor = getContrastingColor(window.getComputedStyle(element).backgroundColor);

    element.style.setProperty('--cme-color', contrastedColor);
  }

  onMount(() => {
    if(!colorValue) return;

    updateContrastingColor();
  });

  color.subscribe(() => {
    if(!element) return;

    afterFuturePaint(updateContrastingColor());
  })
</script>

<div class="full" style="background-color: {colorValue}" bind:this={element}>
  <div class="label-wrapper">
    <span class="label contrast">
      {colorValue || "Share a color."}
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
