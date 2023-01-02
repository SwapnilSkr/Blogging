import axios from "../../axios/axiosInstance"

const config = {
    headers: {
        // Authorization: `Bearer ${localStorage.getItem('userInfo')._id}`,
      'Content-Type': 'application/json',
    },
}

export const addBlogToDb = async (blog) => {
    const response = await axios.post('/blogs/add', blog, config);
    console.log(response.data);
    return response.data
}

export const updateBlogToDb = async (blog) => {
    const response = await axios.put('/blogs/update', blog, config);
    console.log(response.data);
    return response.data
}

export const deleteBlogFromDb = async (blog) => {
    const response = await axios.post('/blogs/delete', blog, config);
    console.log(response.data);
    return response.data
}
// export const deleteBlogFromDb = async (blog) => {
//     const response = await axios.delete('/blogs/delete', {...config, data: blog});
//     console.log(response.data);
//     return response.data
// }

export const getAllBlogs = async () => {
    const response = await axios.get('/blogs/all', config);
    return response.data
}

export const getBlog = async (id) => {
    const response = await axios.get(`/blogs/${id}`,config);
    return response.data
}

export const getProfileBlogs = async (id) => {
    const response = await axios.get(`/blogs/all/${id}`,config);
    return response.data
}

