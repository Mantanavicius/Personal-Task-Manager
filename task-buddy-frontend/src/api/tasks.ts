import axios from "./axios";

export const fetchTasks = async () => {
    try{
        const response = await axios.get('/tasks')
        return response.data
    } catch (e){
        console.log(e)
        throw e
    }
}

export const createTask = async (title: string, description: string) => {
    try{
        const response = await axios.post('/tasks', {title, description})
        return response.data
    } catch (e){
        console.log(e)
        throw e
    }
}

export const updateTask = async (id: string, title: string, description: string) => {
    try{
        const response = await axios.put(`/tasks/${id}`, {title, description})
        return response.data
    } catch (e){
        console.log(e)
        throw e
    }
}

export const deleteTask = async (id: string) => {
    try{
        const response = await axios.delete(`/tasks/${id}`)
        return response.data
    } catch (e){
        console.log(e)
        throw e
    }
}