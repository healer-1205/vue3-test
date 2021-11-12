import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import useTaskController from '@/controllers/useTaskController'
import {EnumPlatforms, EnumPlatformsToArray, TaskModel} from '@/types/task.model'
import useTaskStore from '@/store/task'
import useErrorStore from "@/store/error";

export default function useTask() {
  const taskController = useTaskController()
  const router = useRouter()
  const { setTask } = useTaskStore()
  const { getError, setError, removeError } = useErrorStore()

  const task = reactive<TaskModel>({
    title: '',
    description: '',
    budget: {
      value: 0,
      currency: 'USD',
    },
    platforms: [...EnumPlatformsToArray],
    filesIds: [],
  })


  const store = () => {
    removeError();
    taskController
      .save(task)
      .then((response) => {
        setTask([response.data])
        router.push({ name: 'Dashboard' })
      })
      .catch((error) => {
        setError(error?.response?.data.message || 'Please, Try again!');
      })
  }

  return {
    task,
    store,
    platforms: EnumPlatforms,
    error: getError
  }
}
