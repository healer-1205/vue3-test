import { computed, Ref, ref } from 'vue'
import { UserPublicInfo } from '@/types/user.model'

const myProfile: Ref<UserPublicInfo | null> = ref(null)
const myTask: any = ref(null)

export default function useUserStore() {
  const getMyProfile = computed(() => myProfile.value)
  const setMyProfile = (data: UserPublicInfo | null) => {
    myProfile.value = data
  }
  const setTask = (data: any | null) => {
    myTask.value = data
  }
  const getTask = () => {
    return myTask
  }

  const reset = () => {
    setMyProfile(null)
  }

  return {
    getMyProfile,
    setMyProfile,
    getTask,
    setTask,
    reset,
  }
}
