<script lang="ts">
  import { getColor } from "./lib/colors";
  import { color as colorStore } from "./store";
  import Screen from "./components/Screen.svelte";
  import ColorForm from "./components/ColorForm.svelte";
import { onMount } from "svelte";
  let element;

  const pathColor = getColor();

  if (pathColor.value) {
    $colorStore = pathColor;
  }

  colorStore.subscribe(value => {

    // element.style.setProperty('--cme-color', value.value);
    // console.log('value', value);
  })
</script>

<main class="full" bind:this={element}>
  {#if $colorStore.value}
    <Screen />
  {:else}
    <ColorForm />
  {/if}
</main>

<style global>
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global(body) {
    padding: 0;
    margin: 0;
  }

  :global(.contrast) {
    color: var(--cme-color);
  }

  .full {
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
  }
  button {
    border: 0;
    background: 0;
    font-weight: semibold;
    font-size: 1rem;
    padding: 0;
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
    pointer-events: none;
  }
</style>
