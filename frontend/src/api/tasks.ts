import axios from "./axios";

export const fetchTasks = async () => {
    try{
        const response = await axios.get('/')
        return response.data
    } catch (e){
        console.log(e)
    }
}

export const fetchTask = async (id: string) => {
    try{
        const response = await axios.get(`/${id}`)
        return response.data
    } catch (e){
        console.log(e)
    }
}

export const createTask = async (title: string, description: string) => {
    try{
        const response = await axios.post('/', {title, description})
        return response.data
    } catch (e){
        console.log(e)
    }
}

export const updateTask = async (id: string, title?: string, description?: string, completed?: boolean) => {
  try {
    const updateData: { title?: string; description?: string; completed?: boolean } = {};

    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (completed !== undefined) updateData.completed = completed;

    const response = await axios.patch(`/${id}`, updateData);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteTask = async (id: string) => {
    try{
        const response = await axios.delete(`/${id}`)
        return response.data
    } catch (e){
        console.log(e)
    }
}