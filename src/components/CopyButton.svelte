<script lang="ts">
  import { color } from "../store";

  import { sendEvent } from "../lib/utils";

  let hasBeenClicked: boolean = false;
  $: buttonText = hasBeenClicked ? "Copied!" : "Copy Link";

  let copyLink = () => {
    let currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    hasBeenClicked = true;

    sendEvent("copy_link", {
      link: currentUrl,
    });
  };

  // Reset button after the color changes.
  color.subscribe(() => {
    hasBeenClicked = false;
  });
</script>

<button on:click={copyLink} disabled={hasBeenClicked}>
  <span>{buttonText}</span>
</button>
