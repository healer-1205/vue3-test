import api from '@/services/api'
import useUserStore from '@/store/user'
import {EnumPlatforms, TaskModel, TaskResponseModel, TasksResponseModel} from '@/types/task.model'
import useAuthStore from '@/store/auth'
import useResetStore from '@/store/reset'
import useTaskStore from "@/store/task";

const { setMyProfile } = useUserStore()
const auth = useAuthStore()
const reset = useResetStore()
const { setTask } = useTaskStore()

type GetTasksType = {
  limit?: number,
}
const save = async (task: TaskModel) => {
  return await api.post<TaskResponseModel>('tasks', task).then((response) => {
    return response
  })
}
const getTasks = async ({ limit = 5 }: GetTasksType) => {
  return await api.get<TasksResponseModel>('tasks', {
    params: {
      limit: limit,
    }
  }).then((response) => {
    setTask(response?.data?.tasks || [])
    return response
  })
}

export default function useTaskController() {
  return {
    save,
    getTasks
  }
}
