import { computed, Ref, ref } from 'vue'

const errorList: Ref<string> = ref('')

export default function useErrorStore() {
  const getError = computed(() => errorList.value)
  const setError = (data: string) => {
    errorList.value = data
  }
  const removeError = () => {
    errorList.value = ""
  }

  return {
    getError,
    setError,
    removeError
  }
}
