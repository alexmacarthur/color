<script lang="ts">
  import { getColor } from "./lib/colors";
  import { color as colorStore } from "./store";
  import Screen from "./components/Screen.svelte";
  import ColorForm from "./components/ColorForm.svelte";

  const pathColor = getColor();

  if (pathColor.value) {
    $colorStore = pathColor;
  }
</script>

<main class="full">
  {#if $colorStore.value}
    <Screen />
  {:else}
    <ColorForm />
  {/if}
</main>

<style global>
  /*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /*
  Remove list styles (bullets/numbers)
  in case you use it with normalize.css
*/
  ol,
  ul {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }

  /* Removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
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
    filter: saturate(0) grayscale(1) brightness(0.7) contrast(1000%) invert(1);
  }

  .full {
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
  }

  input {
    background: white;
    border-radius: 3px;
    font-size: 1.5rem;
    padding: 0.75rem 1.25rem 1rem 1.25rem;
  }
</style>
