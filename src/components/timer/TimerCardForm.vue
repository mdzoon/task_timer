<template>
    <div>
        <slot>
            <div class="card-body">
                <h5 class="card-title">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Task Name"
                        required
                        v-model="taskName"
                    >
                </h5>
                <div class="container">
                    <p>Set deadline for task:</p>
                    <div class="row">
                        <div class="card-text">
                            <div>
                                <label for="">Date: </label>
                                <input
                                    class="form-control"
                                    type="date"
                                    name="date"
                                    id="date"
                                    :min="today"
                                    required
                                    v-model="today"
                                >
                            </div>

                        </div>
                        <div class="card-text">
                            <div>
                                <label for="">Time: </label>
                                <input
                                    class="form-control"
                                    type="time"
                                    name="time"
                                    id="time"
                                    required
                                    v-model="time"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary btn-lg m-1" @click="createNewTask">Create</button>
                <button type="button" class="btn btn-secondary btn-lg m-1" @click="clearForm">Clear</button>
            </div>
        </slot>
    </div>
</template>

<script>

export default {
  name: 'TimerCardForm',
  data () {
    return {
      taskName: '',
      today: '',
      time: ''
    }
  },
  methods: {
    createNewTask () {
      const deadline = new Date(this.today + 'T' + this.time + ':00')
      const task = {
        taskName: this.taskName,
        deadline: deadline.getTime()
      }
      console.log(task)
      this.$store.state.task = task
    },
    clearForm () {
      this.taskName = ''
      this.today = ''
      this.time = ''
    }
  }
}
</script>
