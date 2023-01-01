import { GET_ALL_BLOGS_FAILED, GET_ALL_BLOGS_SUCCESS, GET_ALL_BLOGS_REQUEST, GET_BLOG_FAILED, GET_BLOG_REQUEST, GET_BLOG_SUCCESS, GET_PROFILE_BLOGS_FAILED, GET_PROFILE_BLOGS_REQUEST, GET_PROFILE_BLOGS_SUCCESS } from "../constants/blog";
import { getAllBlogs, getBlog, getProfileBlogs } from "../apis/blog";

export const getAllBlogRequest = () => ({
    type: GET_ALL_BLOGS_REQUEST,
});

export const getAllBlogsSuccess = (blogs) => ({
    type: GET_ALL_BLOGS_SUCCESS,
    payload: blogs,
});

export const getAllBlogsFailed = (err) => ({
    type: GET_ALL_BLOGS_FAILED,
    payload: err,
});

export const getAllBlogsFromDb = () => async (dispatch) => {
    dispatch(getAllBlogRequest());
    try {
        const res = await getAllBlogs();
        dispatch(getAllBlogsSuccess(res));
    } catch (err) {
        console.log(err);
        dispatch(getAllBlogsFailed(err.response.data.message));
    }
};

export const getBlogRequest = () => ({
    type: GET_BLOG_REQUEST,
});

export const getBlogSuccess = (blog) => ({
    type: GET_BLOG_SUCCESS,
    payload: blog,
});

export const getBlogFailed = (err) => ({
    type: GET_BLOG_FAILED,
    payload: err,
});

export const getBlogFromDb = (id) => async (dispatch) => {
    dispatch(getBlogRequest());
    try {
        const res = await getBlog(id);
        dispatch(getBlogSuccess(res));
    } catch (err) {
        console.log(err);
        dispatch(getBlogFailed(err.response.data.message));
    }
}

export const getProfileBlogsRequest = () => ({
    type: GET_PROFILE_BLOGS_REQUEST,
});

export const getProfileBlogsSuccess = (blogs) => ({
    type: GET_PROFILE_BLOGS_SUCCESS,
    payload: blogs,
});

export const getProfileBlogsFailed = (err) => ({
    type: GET_PROFILE_BLOGS_FAILED,
    payload: err,
});

export const getProfileBlogsFromDb = (id) => async (dispatch) => {
    dispatch(getProfileBlogsRequest());
    try {
        const res = await getProfileBlogs(id);
        dispatch(getProfileBlogsSuccess(res));
    } catch (err) {
        console.log(err);
        dispatch(getProfileBlogsFailed(err.response.data.message));
    }
}