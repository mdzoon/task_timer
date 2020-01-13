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
                        v-model="task.name"
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
                                    :min="task.date"
                                    required
                                    v-model="task.date"
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
                                    v-model="task.time"
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
  props: {
    task: Object
  },
  methods: {
    createNewTask () {
      const task = {
        name: this.task.name,
        date: this.task.date,
        time: this.task.time
      }
      console.log(task)
      this.$store.state.tasks = task
    },
    clearForm () {
      this.task.name = ''
      this.task.date = ''
      this.task.time = ''
    }
  }
}
</script>
