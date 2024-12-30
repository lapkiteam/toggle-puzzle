<script lang="ts">
  import { Model } from "../model"

  const lampsCount = 4
  let puzzle = Model.create("Linear", lampsCount)
</script>

<div class="container">
  {#each puzzle.lamps as lamp, index}
    <button
      class="lamp {lamp && "lamp-on"}"
      on:click={() => {
        puzzle = Model.toggle(puzzle, index)
      }}
    >
      💡
    </button>
  {/each}
</div>


<style>
  .container {
    text-align: left;
  }
  .lamp {
    transform-origin: center;
  }
  .lamp-on {
    background-color: antiquewhite;
  }
</style>
