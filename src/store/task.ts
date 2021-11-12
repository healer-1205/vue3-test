import { computed, Ref, ref } from 'vue'
import { TaskResponseModel } from '@/types/task.model'

const taskList: Ref<TaskResponseModel[]> = ref([])

export default function useTaskStore() {
  const getTask = computed(() => taskList.value)
  const setTask = (data: TaskResponseModel[]) => {
    taskList.value = [...data, ...taskList.value]
  }

  return {
    getTask,
    setTask,
  }
}
