<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  import { provinces } from '../datastore/provinces.js'
  export let province
  function changeProvince(p) {
    province = p
    dispatch('message', {
      province: p,
    })
  }

  $: console.log(province)
</script>

<div class="map-menu">
  <div>
    <nav>
      <ul>
        {#each provinces as p}
          <li
            on:click={() => changeProvince(p.code)}
            class={p.code === province ? 'selected-tab' : ''}
          >
            {p.name}
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</div>

<style>
  .map-menu {
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0px;
    margin: 0px;
  }
  nav {
    margin-top: 0px;
  }
  nav ul {
    margin-top: 0px;
    width: 100%;
  }
  nav li {
    /* border: solid 1px var(--gray100); */
    font-size: 0.9rem;
    font-family: var(--headerFont);
    font-weight: 500;
    margin: 1px;
    text-align: center;
    padding: 8px 10px;

    background: #fff;
    /* -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.28);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.28);
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.28); */
    cursor: pointer;
  }

  nav li:hover {
    background: #b6d1d1;
    /* color: #fff; */
  }

  nav {
    margin: 0px;
  }
  nav li.selected-tab {
    background: #7fb4b4;
    color: #fff;
  }
  .selected-tab:hover {
    background: #7fb4b4;
  }
</style>
