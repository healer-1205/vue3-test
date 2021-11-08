<template>
  <main class="dashboard">
    <h1 class="page-title">Dashboard view</h1>
    <div v-for="(key, index) in Object.keys(MyProfile)" :key="index">
      <div>{{ key }}: {{ MyProfile[key] }}</div>
    </div>
    <div style="margin-top: 100px" v-if="tasks">
      <div v-for="(key, index) in Object.keys(tasks)" :key="index">
        <div>{{ key }}: {{ tasks[key] }}</div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useUserAuthentificationController from '@/controllers/useUserAuthentificationController'
import { UserPublicInfo } from '@/types/user.model'
import useUserStore from '@/store/user'

export default defineComponent({
  name: 'Dashboard',
  data() {
    return {
      MyProfile: {} as UserPublicInfo | null,
      tasks: [],
    }
  },
  created() {
    const auth = useUserAuthentificationController()
    const { getTask } = useUserStore()
    auth
      .getAuthInfo()
      .then((response) => {
        this.MyProfile = response.data
        this.tasks = getTask()
      })
      .catch((e) => {
        return e
      })
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/Dashboard';
</style>
