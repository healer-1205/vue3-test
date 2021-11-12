<template>
  <AppNav />

  <router-view />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import useAuthStore from '@/store/auth'
import useResetStore from './store/reset'
import AppNav from './components/layout/AppNav.vue'
import useUserProfileInfoController from "@/controllers/useUserProfileInfoController";
import useTaskController from "@/controllers/useTaskController";

export default defineComponent({
  name: 'App',
  components: { AppNav },
  setup() {
    const router = useRouter()
    const { isAuthenticated } = useAuthStore()
    const { reset } = useResetStore()
    const profile = useUserProfileInfoController()
    const taskController = useTaskController()

    if (!isAuthenticated.value && router.currentRoute.value.meta?.requiresAuth) {
      router.push('/login')
    }

    if (isAuthenticated.value) {
      profile.findUserProfile();
      taskController.getTasks({})
    }

    watch(isAuthenticated, (c) => {
      if (!c) {
        if (router.currentRoute.value.meta?.requiresAuth) {
          router.push('/login')
        }
        reset()
      }
    })

    return {
      isAuthenticated,
    }
  },
})
</script>

<style lang="scss">
@import '@/assets/styles/reset';
@import '@/assets/styles/main';
</style>
