<template>
  <main class="dashboard">
    <h1 class="page-title">Dashboard view</h1>

    <h4>My profile view</h4>
    <br/>
    <p>{{ getMyProfile }}</p>

    <br/>
    <h4>Task List</h4>
    <table border="1" style="margin-left: auto;margin-right: auto;">
      <thead>
      <tr>
        <td>Title</td>
        <td>Description</td>
        <td>Budget</td>
        <td>Platforms</td>
        <td>AddedTime</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="task of getTask" v-bind:key="task">
        <td>{{ task.title }}</td>
        <td>{{ task.description }}</td>
        <td>{{ task.budget }}</td>
        <td>{{ task.platforms.join(', ') }}</td>
        <td>{{ task.addedTime }}</td>
      </tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts">
  import useUserStore from '@/store/user'
  import useTaskStore from '@/store/task'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Dashboard',
    setup() {
      const { getMyProfile } = useUserStore()
      const { getTask } = useTaskStore()

      return {
        getMyProfile,
        getTask,
      }
    },
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/views/Dashboard';
</style>
