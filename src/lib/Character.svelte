<script lang="ts">
  import type { Model } from "../model"

  export let puzzle: Model

  type Part = {
    boar: string
    human: string
  }

  const parts: Part[] = [
    {
      boar: "boar-head.png",
      human: "human-head.png",
    },
    {
      boar: "boar-back-left-leg.png",
      human: "human-left-leg.png",
    },
    {
      boar: "boar-front-left-leg.png",
      human: "human-left-hand.png",
    },
    {
      boar: "boar-body.png",
      human: "human-body.png",
    },
    {
      boar: "boar-back-right-leg.png",
      human: "human-right-leg.png",
    },
    {
      boar: "boar-front-right-leg.png",
      human: "human-right-hand.png",
    }
  ].reverse()
</script>

<slot>
  {#each puzzle.lamps as lamp, index}
    <img
      class="drawing-layer"
      src={(() => {
        const part = parts[index]
        return `boar/${lamp ? part.human : part.boar}`
      })()}
      alt=""
    >
  {/each}
</slot>

<style>
  .drawing-layer {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
