<script lang="ts">
  import { getColor } from "./lib/colors";
  import { color as colorStore } from "./store";
  import Screen from "./components/Screen.svelte";
  const pathColor = getColor();

  if (pathColor.value) {
    $colorStore = pathColor;
  }
</script>

<main class="full">
  <Screen />
</main>

<style global>
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --cme-contrast-color: black;
    --cme-original-color: white;
    --cme-fade-opacity: .6;
  }

  body {
    padding: 0;
    margin: 0;
  }

  * {
    color: var(--cme-contrast-color);
  }

  .full {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  button {
    background: 0;
    font-weight: semibold;
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    border-radius: 50px;
    cursor: pointer;
    border: 2px solid var(--cme-contrast-color);
    box-shadow: 4px 4px var(--cme-contrast-color);
  }

  button:hover {
    box-shadow: none;
  }

  button:disabled {
    cursor: default;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    box-shadow: none;
  }
</style>
