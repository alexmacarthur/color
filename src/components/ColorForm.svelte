<script lang="ts">
  import { getColor } from "../lib/colors";

  import { color } from "../store";

  let colorInputValue = "";
</script>

<form
  class="form"
  on:submit={(e) => {
    e.preventDefault();

    let colorValue = getColor(colorInputValue);

    color.set(colorValue);

    window.history.pushState({}, "", `/${colorValue.value}`);
  }}
>
  <h3 class="contrast">Enter a color value.</h3>

  <span class="contrast">
    Any valid color in CSS is allowed -- RGB, HSL, hexadecimal, whatever.
  </span>

  <div class="input-wrapper">
    <input type="text" bind:value={colorInputValue} placeholder="dodgerblue" />
  </div>
</form>

<style>
  h3 {
    font-size: 1.4rem;
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 300;
    text-align: center;
  }

  span {
    display: inline-block;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    opacity: 0.6;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    border: none;
    border-radius: 3px;
    background: white;
    font-size: 1.5rem;
    padding: 0.75rem 1.25rem 1rem 1.25rem;
    box-shadow: none;
  }

  .input-wrapper {
    position: relative;
    display: grid;
    place-items: center;
  }

  .input-wrapper:after {
    content: "";
    opacity: 0.6;
    border-radius: 3px;
    border: 2px solid var(--cme-color);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .input-wrapper input {
    position: relative;
    z-index: 1;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
  }

  .input-wrapper:has(input:focus) {
    display: none;
  }
</style>
