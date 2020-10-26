<template>
  <div>
    <navbar class="homeColor">
      <LeftNav slot="LeftNav"></LeftNav>
      <CenterNav slot="CenterNav"></CenterNav>
      <RightNav slot="RightNav"></RightNav>
    </navbar>
  </div>
</template>

<script>
  import navbar from '../../components/common/navbar/NavBar'
  import LeftNav from '../../components/common/navbar/LeftNav'
  import CenterNav from '../../components/common/navbar/CenterNav'
  import RightNav from '../../components/common/navbar/RightNav'

  export default {
    name: "home",
    components: {
      navbar,
      LeftNav,
      CenterNav,
      RightNav
    }
  }
</script>

<style scoped>
  .homeColor {
    background-color: #ef4562;
    font-width: 800px;
    font-size: 24px;
    color: white;

  }
</style>
