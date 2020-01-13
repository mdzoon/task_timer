<template>
  <div id="list-example" class="list-group">
    <ListItem v-for="task in tasks" :key=task.name :task="task" />
  </div>
</template>

<script>
import ListItem from './list/ListItem.vue'

export default {
  name: 'TimerList',
  components: {
    ListItem
  },
  props: {
    tasks: Array
  },
  watchers: {
    addTask () {
      return this.$store.getters.getTasks
    }
  }
}
</script>

<style scoped lang="scss">
</style>
