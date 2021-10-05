import axios from 'axios'

const settings = {
    withCredentials: true,

}
const instance = axios.create({
    baseURL: 'http://api.work.r-m.solutions/',
    ...settings
})

export const registrationAPI = {

    createUser(userEmail: string, userPhoneNumber: string, fullName: string, password: string){
        return instance.post<UserType>('user/register', {userEmail, userPhoneNumber, fullName, password})
    }

    // getTodolists() {
    //     const promise = instance.get<TodolistType[]>('todo-lists');
    //     return promise;
    // },
    // createTodolist(title: string) {
    //     const promise = instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title});
    //     return promise;
    // },
    // deleteTodolist(id: string) {
    //     const promise = instance.delete<ResponseType>(`todo-lists/${id}`);
    //     return promise;
    // },
    // updateTodolist(id: string, title: string) {
    //     const promise = instance.put<ResponseType>(`todo-lists/${id}`, {title: title});
    //     return promise;
    // },
    // getTasks(todolistId: string) {
    //     return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`);
    // },
    // deleteTask(todolistId: string, taskId: string) {
    //     return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
    // },
    // createTask(todolistId: string, taskTitile: string) {
    //     return instance.post<ResponseType<{ item: TaskType}>>(`todo-lists/${todolistId}/tasks`, {title: taskTitile});
    // },
    // updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
    //     return instance.put<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks/${taskId}`, model);
    // }
}

// Types
export type UserType = {
    userEmail: string,
    userPhoneNumber: string,
    fullName: string,
    password: string
}