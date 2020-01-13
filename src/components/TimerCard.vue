<template>
    <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example mb-4">
      <div id="list-item-1" class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs nav-fill" role="tablist">
            <li class="nav-item" @click="selectedComponent = 'TimerCardDisplay'">
              <a class="nav-link"
               role="tab"
               data-toggle="tab"
               :class="{ active: currentTab === 'activeTask'}"
               @click="currentTab = 'activeTask'">
               Active Task
              </a>
            </li>
            <li class="nav-item"  @click="selectedComponent = 'TimerCardForm'">
              <a class="nav-link"
               role="tab"
               data-toggle="tab"
               :class="{ active: currentTab === 'editTask'}"
               @click="currentTab = 'editTask'">
               Edit Task
              </a>
            </li>
          </ul>
        </div>
          <component class="pt-5" :is="selectedComponent" :task="task">
            <slot></slot>
          </component>
      </div>
    </div>
</template>

<script>
import TimerCardDisplay from './timer/TimerCardDisplay.vue'
import TimerCardForm from './timer/TimerCardForm.vue'

export default {
  name: 'TimerCard',
  components: {
    TimerCardDisplay,
    TimerCardForm
  },
  data () {
    return {
      selectedComponent: TimerCardDisplay,
      currentTab: 'activeTask',
      task: {
        name: 'Add task name',
        time: 'and time',
        date: 'Add date',
        timeLeft: {
          days: '00',
          hours: '00',
          minutes: '00'
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
