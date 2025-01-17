<script lang="ts">
  import { Model } from "../model"
  import Character from "./Character.svelte"

  const lampsCount = 6
  let puzzle = Model.create("Linear", lampsCount)
</script>

<div>
  <div class="drawing">
    <Character puzzle={puzzle} />
  </div>
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
  .drawing {
    position: relative;
    width: 382px;
    height: 310px;
  }
</style>
