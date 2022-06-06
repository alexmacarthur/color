<script lang="ts">
  import { getContrastingColor, invertHex } from "../lib/colors";
  import { onMount } from "svelte";
  import { color } from "../store";
  import ColorForm from "./ColorForm.svelte";
  import CopyButton from "./CopyButton.svelte";

  let element;
  $: colorValue = $color.isValid ? $color.value : "white";

  const updateContrastingColor = () => {
    let originalColor = window.getComputedStyle(element).backgroundColor;
    let contrastedColor = getContrastingColor(originalColor);

    element.style.setProperty("--cme-contrast-color", contrastedColor);
    element.style.setProperty("--cme-original-color", originalColor);
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
    <span class="label">
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

  <div class="creator">
    created by <a href="https://macarthur.me" target="_blank">Alex MacArthur</a>
  </div>
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

  .creator {
    text-align: center;
    color: var(--cme-contrast-color);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1rem;
    font-size: 0.85rem;
    opacity: var(--cme-fade-opacity);
  }

  .creator a {
    color: inherit;
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
