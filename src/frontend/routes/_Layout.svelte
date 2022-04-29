<script lang="ts">
  import { SITE_NAME } from '../../shared/constants';
</script>

<main>
  <h1>{SITE_NAME}</h1>
  <slot />
</main>

<style>
  main {
    padding: 1rem;
  }
  h1 {
    text-align: center;
  }
</style>
