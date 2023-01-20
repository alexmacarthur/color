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
  <div class="inner-wrapper full">
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
        <div class="button-wrapper">
          <CopyButton />
        </div>
      {/if}
    </div>

    <ColorForm />
  </div>

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
    padding-top: 0.75rem;
    opacity: var(--cme-fade-opacity);
  }

  .creator a {
    color: inherit;
  }

  .label {
    font-size: clamp(2.75rem, 10vw, 5rem);
    font-weight: bold;
    display: block;
    line-height: 1.2;
    word-break: break-all;
  }

  .button-wrapper {
    padding-top: 1rem;
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
