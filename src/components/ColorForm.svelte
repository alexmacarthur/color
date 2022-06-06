<script lang="ts">
  import { sendEvent } from "../lib/utils";
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

    sendEvent("submit_color", {
      value: colorInputValue,
    });
  }}
>
  <h3 class="contrast">Enter a color value.</h3>

  <span class="contrast">
    Any valid color in CSS is allowed -- RGB, HSL, hexadecimal, whatever.
  </span>

  <input type="text" bind:value={colorInputValue} placeholder="dodgerblue" />
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
    border: 2px solid var(--cme-color);
    border-radius: 3px;
    background: white;
    font-size: 1.5rem;
    padding: 0.75rem 1.25rem 1rem 1.25rem;
    box-shadow: 4px 4px var(--cme-color);
  }

  input:focus {
    outline: var(--cme-color);
    box-shadow: none;
  }
</style>
