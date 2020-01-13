<template>
  <div id="app">
    <TheHeader/>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-6">
          <TimerCard/>
        </div>
        <div class="col-md-6">
          <TimerList/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimerCard from './components/TimerCard.vue'
import TheHeader from './components/TheHeader.vue'
import TimerList from './components/TimerList.vue'

export default {
  name: 'app',
  components: {
    TheHeader,
    TimerCard,
    TimerList
  },
  data () {
    return {
      name: '',
      time: ''
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: lightcoral;
}
.nav-link {
    cursor: pointer;
}
</style>
