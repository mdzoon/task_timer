<template>
    <div id="list-example" class="list-group">
        <ListItem v-for="item in items" :key="item.id" :item="item"/>
    </div>
</template>

<script>
import ListItem from './list/ListItem.vue'

export default {
  name: 'TimerList',
  components: {
    ListItem
  },
  data () {
    return {
      items: [
        {
          id: 1,
          name: 'Do the dishes'
        },
        {
          id: 2,
          name: 'Take out the trash'
        },
        {
          id: 3,
          name: 'Mow the lawn'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
