<script lang="ts">
  import { regularPolygon } from "../utils"
  import { Model } from "../model"
  import Character from "./Character.svelte"

  const polygonRadius = 400 / 2
  const lampsCount = 6
  const lampCoords = regularPolygon(polygonRadius, polygonRadius, polygonRadius, 0, lampsCount)
  let puzzle = Model.create("Circular", lampsCount)
</script>

<div class="container">
  <div class="character">
    <Character puzzle={puzzle} />
  </div>
  {#each puzzle.lamps as lamp, index}
    <button
      class="lamp {lamp && "lamp-on"}"
      style:transform="translate(calc({lampCoords[index][0]}px - 50%), calc({lampCoords[index][1]}px - 50%))"
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
    width: 400px;
    height: 400px;
    /* background-color: red; */
    /* border-radius: 100%; */
    position: relative;
    text-align: left;
  }
  .lamp {
    position: absolute;
    transform-origin: center;
  }
  .lamp-on {
    background-color: antiquewhite;
  }
  .character {
    left: 10%;
    top: 14%;
    position: relative;
  }
</style>
