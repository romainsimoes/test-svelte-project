<script>
  import { onMount } from "svelte";
  import { supabase } from "../lib/supabaseClient";

  let posts = null;
  let errorMessage = null;
  onMount(async () => {
    let { data, error } = await supabase.from("post").select("*");
    if (error) {
      return (errorMessage = error.message);
    }
    posts = data;
  });
</script>
  
  <main>
    {#if posts}
      {#each posts as { id, content }}
        <div class='post'>
          {content}
        </div>
      {/each}
    {:else if errorMessage}
        <div class='error'>
          {errorMessage}
        </div>
    {:else}
      <p>Loading ...</p>
    {/if}
  </main>
  
  <style>
  .error {
    color: red;
  }
  .post {
    border: solid 1px gray;
    border-radius: 3px;
    padding: 20px;
    margin: 10px;
  }
</style>