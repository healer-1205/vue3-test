<template>
  <main class="task-create">
    <h1 class="page-title">Task Create view</h1>
    <form class="login-form" @submit.prevent="store">
      <label class="label">
        Title:
        <input v-model="task.title" class="text-input" type="text" />
      </label>
      <br/>
      <label class="label">
        Description:
        <textarea  v-model="task.description" class="text-input"></textarea>
      </label>
      <br/>
      <label class="label">
        Budget Value:
        <input v-model="task.budget.value" class="text-input" type="number" />
      </label>
      <br/>
      <label class="label">
        Platforms:
        <template v-for="platform of platforms" v-bind:key="platform">
          <label >
            <input type="checkbox"  v-bind:value="platform" v-model="task.platforms">
            {{ platform }}
          </label>
        </template>
        <br/>
        <br/>
      </label>
      <br/>
      <button class="button">Create</button>
      <br/>
      <p class="validationError" v-if="error">{{ error}}</p>

    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTask from '@/components/task/task'

export default defineComponent({
  name: 'TaskCreate',
  setup() {
    const { task, store, platforms, error } = useTask()
    return {
      task,
      store,
      platforms,
      error,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/TaskCreate';
</style>
