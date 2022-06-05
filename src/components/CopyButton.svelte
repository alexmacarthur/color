<script lang="ts">
  let hasBeenClicked: boolean = false;
  $: buttonText = hasBeenClicked ? "Copied" : "Copy Link";
  $: buttonIcon = hasBeenClicked ? "👍" : "💾";

  let copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    hasBeenClicked = true;
  };
</script>

<button on:click={copyLink} disabled={hasBeenClicked}>
  <span class="contrast">{buttonText}</span>
  {buttonIcon}
</button>
