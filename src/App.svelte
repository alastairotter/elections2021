<script>
  import { onMount } from 'svelte'
  import Header from '../components/Header.svelte'
  import ProvMap from '../components/ProvMap.svelte'
  import MapMenu from '../components/MapMenu.svelte'
  export let province = 'EC'
  let coalition = false
  let arrows = true
  //   import { municipalData } from '../datastore/municipal-data.js'
  function clicked(e) {
    console.log(e.detail.province)
    province = e.detail.province
    promise = false
    setTimeout(() => {
      promise = true
    }, 50)
  }
  let promise = false

  onMount(async () => {
    promise = true
  })
</script>

<main>
  <Header />

  <div class="maps-wrap">
    <div class="map-title-wrap">
      <div class="map-title">Local Government Elections 2021</div>
      <div class="map-options">
        SHOW: &nbsp; Voter turnout: <input
          type="checkbox"
          bind:checked={arrows}
        />
        &nbsp; 2016 Coalitions:
        <input type="checkbox" bind:checked={coalition} />
      </div>
    </div>
    <div class="map-body">
      <div class="map-menu-wrap">
        <MapMenu {province} on:message={clicked} />
      </div>
      <div>
        {#if promise}
          <ProvMap {province} {coalition} {arrows} />
        {/if}
      </div>
    </div>
  </div>
</main>

<style>
  .map-menu-wrap {
    margin-top: 100px;
  }
  .map-body {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
  }
  .map-title {
    font-family: var(--figureFont);
    font-weight: 700;
    font-size: 1.3rem;
    color: #fff;
    width: 100%;
  }
  .map-title-wrap {
    margin-bottom: 20px;
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 20px;
    padding-top: 10px;
    background: #7fb4b4;
    /* border: solid 1px lightgray; */
    z-index: 3000;
    color: #fff;
  }
  .map-options {
    width: 100%;
    font-family: var(--figureFont);
    font-weight: 700;
  }
  .maps-wrap {
    position: relative;
    width: 100%;
    min-height: 450px;
    background: #fff;

    padding: 20px;
    border: solid 1px var(--gray200);
    border-top: none;
    /* padding-bottom: 0px; */
  }
</style>
