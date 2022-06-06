<script lang="ts">
  import { getContrastingColor } from "../lib/colors";
  import { onMount } from "svelte";
  import { color } from "../store";
  import ColorForm from "./ColorForm.svelte";
  import CopyButton from "./CopyButton.svelte";

  let element;
  $: colorValue = $color.isValid ? $color.value : "white";

  const updateContrastingColor = () => {
    let contrastedColor = getContrastingColor(
      window.getComputedStyle(element).backgroundColor
    );

    element.style.setProperty("--cme-color", contrastedColor);
  };

  onMount(() => {
    if (!colorValue) return;

    updateContrastingColor();
  });

  color.subscribe(() => {
    if (!element) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateContrastingColor();
      });
    });
  });
</script>

<div
  class="full screen"
  style="background-color: {colorValue}"
  bind:this={element}
>
  <div class="label-wrapper">
    <span class="label contrast">
      {#if $color.value && !$color.isValid}
        {$color.value}

        <span class="sub-label"> ...isn't a valid color. Try again! </span>
      {:else}
        {$color.value || "Share a color."}
      {/if}
    </span>

    {#if $color.isValid}
      <CopyButton />
    {/if}
  </div>
  <ColorForm />
</div>

<style>
  .screen {
    padding: 1rem 1rem;
  }

  @media screen and (min-width: 700px) {
    .screen {
      padding: 1rem 2rem;
    }
  }

  .label {
    font-size: clamp(3rem, 10vw, 6rem);
    font-weight: bold;
    display: block;
    margin-bottom: 0.25rem;
    line-height: 1.2;
  }

  .sub-label {
    font-size: 2rem;
    display: block;
    font-weight: 400;
  }

  .label-wrapper {
    text-align: center;
    max-width: 800px;
  }
</style>
