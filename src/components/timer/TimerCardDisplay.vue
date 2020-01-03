<template>
  <div>
    <slot>
      <div class="card-body">
        <h5 class="card-title">Task name: {{ task.taskName }}</h5>
        <p>Deadline:</p>
        <h3>{{ task.deadline }}</h3>
        <p>Time left:</p>
        <h1 class="card-text">
          {{ timeLeft.days }}:{{ timeLeft.hours }}:{{ timeLeft.minutes }}:{{ timeLeft.seconds }}
        </h1>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary btn-lg m-1" @click="startCounter">Start</button>
        <button type="button" class="btn btn-secondary btn-lg m-1">
          Hide
          <span class="oi oi-chevron-right" title="chevron right" aria-hidden="true"></span>
        </button>
      </div>
    </slot>
  </div>
</template>

<script>

export default {
  name: 'TimerCardDisplay',
  methods: {
  },
  computed: {
  }
}
</script>
