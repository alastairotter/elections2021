<script>
  import { onMount } from 'svelte'
  import Header from '../components/Header.svelte'
  import ProvMap from '../components/ProvMap.svelte'
  import MapMenu from '../components/MapMenu.svelte'
  export let province = 'EC'
  let coalition = false
  let arrows = true
  let hung = true
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
  <!-- <div class="logo">
    <img src="./images/outlier-logo.png" alt="logo" class="logo" />
  </div> -->
  <Header />
  <div class="map-title-wrap">
    <div class="map-title">Local Government Elections 2021</div>
    <div class="map-options">
      SHOW: &nbsp; Voter turnout: <input
        type="checkbox"
        bind:checked={arrows}
      />
      <!-- &nbsp; 2021 Hung municipalities:
      <input type="checkbox" bind:checked={hung} /> -->
      <!-- &nbsp; Compare with 2016 coalitions:
      <input type="checkbox" bind:checked={coalition} /> -->
    </div>
  </div>
  <div class="maps-wrap">
    <div class="map-body">
      <div class="map-menu-wrap">
        <MapMenu {province} on:message={clicked} />
      </div>

      {#if promise}
        <ProvMap {province} {coalition} {arrows} {hung} />
      {/if}
    </div>
  </div>
</main>

<style>
  .logo {
    background: #fff;
    padding: 10px;
  }
  .logo img {
    height: 40px;
  }
  .map-body {
    display: grid;
    grid-template-columns: 1fr 3fr;
    /* grid-gap: 10px; */
  }
  .map-title {
    font-family: var(--figureFont);
    font-weight: 700;
    font-size: 1.3rem;
    color: #fff;
    /* width: 100%; */
  }
  .map-title-wrap {
    /* margin-bottom: 20px; */
    /* position: absolute; */
    max-width: 96%;
    padding: 2%;
    padding-top: 10px;
    background: #7fb4b4;
    border: solid 1px lightgray;
    z-index: 3000;
    color: #fff;
    /* width: 100%; */
  }
  .map-options {
    width: 100%;
    font-family: var(--figureFont);
    font-weight: 700;
  }
  .maps-wrap {
    width: 96%;
    min-height: 500px;
    max-width: 1000px;
    background: #fff;
    /* padding: 20ppadding: 2%;x; */
    padding: 2%;
    /* border: solid 1px var(--gray200); */
    border-top: none;
  }
  @media only screen and (max-width: 800px) {
    .map-body {
      grid-template-columns: 1fr;
    }
  }
</style>
