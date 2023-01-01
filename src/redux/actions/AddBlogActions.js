import { SET_BLOG_CONTENT, SET_EDIT_BLOG_CONTENT,ADD_BLOG_FAILED, ADD_BLOG_REQUEST, ADD_BLOG_SUCCESS, UPDATE_BLOG_FAILED, UPDATE_BLOG_REQUEST, UPDATE_BLOG_SUCCESS } from '../constants/blog';
import { addBlogToDb, updateBlogToDb } from '../apis/blog';

export const setBlogContent = (blog) => ({
    type: SET_BLOG_CONTENT,
    payload: blog
});

export const setEditBlogContent = (blog) => ({
    type: SET_EDIT_BLOG_CONTENT,
    payload: blog
});

export const addBlogRequest = () => ({
    type: ADD_BLOG_REQUEST,
});

export const addBlogSuccess = (blog) => ({
    type: ADD_BLOG_SUCCESS,
    payload: blog,
});

export const addBlogFailed = (err) => ({
    type: ADD_BLOG_FAILED,
    payload: err,
});

export const addBlog = (blog) => async (dispatch) => {
    dispatch(addBlogRequest());
    try {
        const res = await addBlogToDb(blog);
        dispatch(addBlogSuccess())
    } catch (err) {
        console.log(err);
        dispatch(addBlogFailed(err.response.data.message))
    }
}

export const updateBlogRequest = () => ({
    type: UPDATE_BLOG_REQUEST,
});

export const updateBlogSuccess = (blog) => ({
    type: UPDATE_BLOG_SUCCESS,
    payload: blog,
});

export const updateBlogFailed = (err) => ({
    type: UPDATE_BLOG_FAILED,
    payload: err,
});

export const updateBlog = (blog) => async (dispatch) => {
    dispatch(updateBlogRequest());
    try {
        const res = await updateBlogToDb(blog);
        dispatch(updateBlogSuccess())
    } catch (err) {
        console.log(err);
        dispatch(updateBlogFailed(err.response.data.message))
    }
}