<script lang="ts">
  import LinearPuzzle from "./lib/LinearPuzzle.svelte"
  import CircularPuzzle from "./lib/CircularPuzzle.svelte"
</script>

<main>
  <h1>Puzzle</h1>

  <h2>Linear</h2>
  <div class="card">
    <LinearPuzzle />
  </div>

  <h2>Circular</h2>
  <div class="card">
    <CircularPuzzle />
  </div>
</main>

<style>

</style>
