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

    window.history.pushState({}, "", `/color/${colorValue.value}`);

    e.target["reset"]();

    sendEvent("submit_color", {
      value: colorValue.value,
      isValid: colorValue.isValid,
    });
  }}
>
  <h3>Enter a color value.</h3>

  <span>
    Any valid color in CSS is allowed -- RGB, HSL, hexadecimal, whatever.
  </span>

  <div class="input-wrapper">
    <input
      type="text"
      bind:value={colorInputValue}
      placeholder={$color.value || "dodgerblue"}
    />

    <button type="submit">See It</button>
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
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    opacity: var(--cme-fade-opacity);
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media screen and (min-width: 400px) {
    .input-wrapper {
      flex-direction: row;
    }
  }

  input {
    flex: 1;
    border: 2px solid var(--cme-contrast-color);
    border-radius: 3px;
    background: var(--cme-original-color);
    color: var(--cme-contrast-color);
    font-size: 1.5rem;
    font-weight: normal;
    padding: 0.75rem 1.25rem 1rem 1.25rem;
    box-shadow: 4px 4px var(--cme-contrast-color);
  }

  input:focus {
    outline: var(--cme-contrast-color);
    box-shadow: none;
  }

  ::-webkit-input-placeholder {
    color: var(--cme-contrast-color);
    opacity: 0.4;
  }
  ::placeholder {
    color: var(--cme-contrast-color);
    opacity: 0.4;
  }
  button {
    border-radius: 3px;
  }
</style>
