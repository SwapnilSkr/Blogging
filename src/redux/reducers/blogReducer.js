import { SET_BLOG_CONTENT, SET_EDIT_BLOG_CONTENT, SET_BLOG_LIST, SET_BLOG_LIST_LOADING, ADD_BLOG, ADD_BLOG_FAILED, ADD_BLOG_REQUEST, ADD_BLOG_SUCCESS, DELETE_BLOG, UPDATE_BLOG_REQUEST,UPDATE_BLOG_SUCCESS,UPDATE_BLOG_FAILED, GET_ALL_BLOGS_REQUEST, GET_ALL_BLOGS_SUCCESS, GET_ALL_BLOGS_FAILED, GET_BLOG_REQUEST, GET_BLOG_SUCCESS, GET_BLOG_FAILED, GET_PROFILE_BLOGS_FAILED, GET_PROFILE_BLOGS_REQUEST, GET_PROFILE_BLOGS_SUCCESS } from "../constants/blog"

const initialState = {
    blogContent: null,
    editBlogContent: null,
    blogList: null,
    blogListError: null,
    blogListLoading: false,
    addBlogLoading: false,
    addBlogError: null,
    editBlogLoading: false,
    editBlogError: null,
}
export default function blogReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BLOG_CONTENT:
            console.log('Blog Content: ',action.payload);
            return {
                ...state,
                blogContent: action.payload,
            }
        case SET_EDIT_BLOG_CONTENT:
            console.log('Edit Blog Content: ',action.payload);
            return {
                ...state,
                editBlogContent: action.payload,
            }
        case SET_BLOG_LIST:
            return {
                ...state,
                blogList: action.payload,
            }
        case SET_BLOG_LIST_LOADING:
            return {
                ...state,
                blogListLoading: action.payload,
            }
        case ADD_BLOG:
            return {
                ...state,
                blogList: [...state.blogList, action.payload]
            }
        case ADD_BLOG_REQUEST:
            return {
                ...state,
                addBlogLoading: true,
                addBlogError: null,
            }
        case ADD_BLOG_SUCCESS:
            return {
                ...state,
                blogContent: null,
                addBlogLoading: false,
                addBlogError: null,
            }
        case ADD_BLOG_FAILED:
            return {
                ...state,
                addBlogLoading: false,
                addBlogError: action.payload,
            }
        case UPDATE_BLOG_REQUEST:
            return {
                ...state,
                editBlogLoading: true,
                editBlogError: null,
            }
        case UPDATE_BLOG_SUCCESS:
            return {
                ...state,
                editBlogContent: null,
                editBlogLoading: false,
                editBlogError: null,
            }
        case UPDATE_BLOG_FAILED:
            return {
                ...state,
                editBlogLoading: false,
                editBlogError: action.payload,
            }
        case GET_ALL_BLOGS_REQUEST:
            return {
                ...state,
                blogListLoading: true,
            }
        case GET_ALL_BLOGS_SUCCESS:
            return {
                ...state,
                blogList: action.payload,
                blogListLoading: false,
            }
        case GET_ALL_BLOGS_FAILED:
            return {
                ...state,
                blogListLoading: false,
                blogListError: action.payload,
            }
        case GET_BLOG_REQUEST:
            return {
                ...state,
                blogContent: null,
            }
        case GET_BLOG_SUCCESS:
            return {
                ...state,
                blogContent: action.payload,
            }
        case GET_BLOG_FAILED:
            return {
                ...state,
                blogContent: null,
            }
        case GET_PROFILE_BLOGS_REQUEST:
            return {
                ...state,
                blogListLoading: true,
            }
        case GET_PROFILE_BLOGS_SUCCESS:
            return {
                ...state,
                blogList: action.payload,
                blogListLoading: false,
            }
        case GET_PROFILE_BLOGS_FAILED:
            return {
                ...state,
                blogListLoading: false,
                blogListError: action.payload,
            }
        case DELETE_BLOG:
            return {
                ...state,
                blogList: state.blogList.filter(blog => blog._id !== action.payload),
            }
        default:
            return state
    }
}