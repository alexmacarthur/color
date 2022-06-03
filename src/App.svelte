<script lang="ts">
  import { getColor } from "./lib/colors";

  export let colorHash = getColor().value;
</script>

<main style="background-color: {colorHash}">
  <span class="label" style="color: {colorHash}">
    {colorHash}
  </span>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :global(body) {
    padding: 0;
    margin: 0;
	}

  .label {
    filter: saturate(0) grayscale(1) brightness(.7) contrast(1000%) invert(1);
    font-size: 10vw;
  }

  main {
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
  }
</style>
