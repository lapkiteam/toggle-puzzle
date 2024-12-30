<script lang="ts">
  import { regularPolygon } from "../utils"
  import { Model } from "../model"

  const polygonRadius = 100
  const lampsCount = 10
  const lampCoords = regularPolygon(polygonRadius, polygonRadius, polygonRadius, 0, lampsCount)
  let puzzle = Model.create(lampsCount)
</script>

<div class="container">
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
    width: 200px;
    height: 200px;
    /* background-color: red; */
    /* border-radius: 100%; */

    text-align: left;
  }
  .lamp {
    position: absolute;
    transform-origin: center;
  }
  .lamp-on {
    background-color: antiquewhite;
  }
</style>
