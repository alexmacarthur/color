<script lang="ts">
  import { getColor } from "./lib/colors";

  let color = getColor();
  let givenColor = "";
</script>

<main>
  {#if color.value }
    <div class="color-screen" style="background-color: {color.value}">
      <span class="label" style="color: {color.value}">
        {color.value}
      </span>
    </div>
  {:else}
    <form class="form" on:submit={(e) => {
      e.preventDefault();

      window.history.pushState({}, '', `/${givenColor}`);
      color = getColor(givenColor);
    }}>
      <span>
        Start by either navigating to or submitting any CSS color value:
      </span>

      <input type="text" bind:value={givenColor}>
    </form>
  {/if}
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
    font-weight: bold;
  }

  main, .color-screen {
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
  }
</style>
