<script lang="ts">
  import router from 'page';
  import type { SvelteComponent } from 'svelte';

  import Layout from './routes/_Layout.svelte';
  import Welcome from './routes/Welcome.svelte';
  import NotFound from './routes/NotFound.svelte';

  // Initialize client-side routes.

  const routes = {
    '/': Welcome,
    '*': NotFound
  };

  let pageComponent: typeof SvelteComponent;
  let params: any = null;

  for (const [route, component] of Object.entries(routes)) {
    router(
      route,
      (ctx, next) => {
        params = ctx.params;
        next();
      },
      () => (pageComponent = component)
    );
  }
  router.start();
</script>

<Layout>
  {#if params.length > 0}
    <svelte:component this={pageComponent} {params} />
  {:else}
    <svelte:component this={pageComponent} />
  {/if}
</Layout>
