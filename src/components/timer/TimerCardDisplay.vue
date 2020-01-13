<template>
  <div>
    <slot>
      <div class="card-body">
        <p>Task name: </p>
        <h3 class="card-title">{{ task.name }}</h3>
        <p>Deadline:</p>
        <h5>{{task.date}} {{task.time}}</h5>
        <p>Time left:</p>
        <h1 class="card-text">
          {{task.timeLeft.days}}:{{task.timeLeft.hours}}:{{task.timeLeft.minutes}}
        </h1>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary btn-lg m-1" @click="startCounter">
          Start
          <img src="@/assets/alarm_on-24px.svg" aria-hidden="true" />
        </button>
        <button type="button" class="btn btn-secondary btn-lg m-1" @click="saveTask">
          Save
          <img src="@/assets/done-24px.svg" aria-hidden="true" />
        </button>
      </div>
    </slot>
  </div>
</template>

<script>

export default {
  name: 'TimerCardDisplay',
  props: {
    task: Object
  },
  methods: {
    startCounter () {
      // TODO
    },
    saveTask () {
      const task = {
        name: this.task.name,
        date: this.task.date,
        time: this.task.time
      }
      console.log(task)
      this.$store.state.tasks = task
    }
  },
  watchers: {
    getTask () {
      return this.$store.getters.getTask
    }
  }
}
</script>
