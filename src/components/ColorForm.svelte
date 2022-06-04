<script lang="ts">
import { getColor } from '../lib/colors';

  import { color } from '../store';

  let colorInputValue = "";
</script>

<form class="form" on:submit={(e) => {
  e.preventDefault();

  let colorValue = getColor(colorInputValue);

  color.set(colorValue);

  window.history.pushState({}, '', `/${colorValue.value}`);
}}>
  <h3 class="contrast">
    Enter a color value.
  </h3>

  <span class="contrast">
    Any valid color in CSS is allowed -- RGB, HSL, hexadecimal, whatever.
  </span>

  <input type="text" bind:value={colorInputValue} placeholder="dodgerblue">
</form>

<style>
  h3 {
    font-size: 1.4rem;
    display: block;
    margin-bottom: .5rem;
    font-weight: 300;
    text-align: center;
  }

  span {
    display: inline-block;
    margin-bottom: 1.5rem;
    font-size: .9rem;
    opacity: .6;
  }

  form {
    display: flex;
    flex-direction: column;
  }
</style>
