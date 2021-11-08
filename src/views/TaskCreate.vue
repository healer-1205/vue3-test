<template>
  <main class="task-create">
    <h1 class="page-title">Task Create view</h1>
    <form @submit.prevent="addTask">
      <div>
        <label>Title</label>
        <input id="title" v-model="task.title" type="text" class="form-control" required />
      </div>
      <div>
        <label>Description</label>
        <input id="description" v-model="task.description" type="text" class="form-control" required />
      </div>
      <div style="display: inline">
        <label>Budget</label>
        <input id="budget" v-model="task.budget.value" type="number" class="form-control" required />
        <label name="currency">Currency</label>
        <select id="currency" v-model="task.budget.currency" name="currency">
          <option value="USD">USD</option>
          <option value="PLN">PLN</option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
        </select>
      </div>
      <div>
        <label>Platform</label>
        <select id="platform" v-model="task.platforms" name="platform" multiple>
          <option v-for="(option, key) in cur_platforms" :key="key" :selected="task.platforms.indexOf(option) != -1">
            {{ option }}
          </option>
        </select>
      </div>
      <div>
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import api from '@/services/api'
import useUserStore from '@/store/user'

export default defineComponent({
  name: 'TaskCreate',
  data() {
    return {
      cur_platforms: ['INSTAGRAM', 'YOUTUBE', 'TWITCH', 'OTHER'],
      task: {
        title: '',
        description: '',
        budget: {
          value: 0,
          currency: '',
        },
        platforms: ['INSTAGRAM', 'YOUTUBE', 'TWITCH', 'OTHER'],
        filesIds: ['string'],
      },
    }
  },
  methods: {
    addTask() {
      // Validation
      if (this.task.budget.currency != 'USD') {
        alert('Currency must be USD')
        return false
      }
      api
        .post('/tasks', this.task)
        .then((response) => {
          let { setTask } = useUserStore()
          setTask(response.data)
          alert('task created successfully')
          return response
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/TaskCreate';
</style>
