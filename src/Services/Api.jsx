import { axiosInstance } from "./AxiosInstance";

// register 

export const registerData = async(data)=>{
    try{
        return await axiosInstance.post(`api/register`, data)
    }catch(error){
        console.log('Error while fetching the api data.');
    }
}

//login
export const loginData = async(data)=>{
    try{
        return await axiosInstance.post(`api/login`, data)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Banner
export const bannerData = async()=>{
    try{
        return await axiosInstance.get(`api/banner`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Service
export const serviceData = async()=>{
    try{
        return await axiosInstance.get(`api/service`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Testimonial

export const testimoniData = async()=>{
    try{
        return await axiosInstance.get(`api/testimonial`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Team
export const teamData = async()=>{
    try{
        return await axiosInstance.get(`api/team`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Course
export const courseData = async()=>{
    try{
        return await axiosInstance.get(`api/course`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Course Apply
export const course_apply_Data = async(data,id)=>{
    try{
        return await axiosInstance.post(`api/course/apply/${id}`,data)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Blog
export const blogData = async()=>{
    try{
        return await axiosInstance.get(`api/allBlog`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Blog Details
export const blogDetailsData = async(id)=>{
    try{
        return await axiosInstance.get(`api/blogdetails/${id}`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Comments
export const commentsData = async(id)=>{
    try{
        return await axiosInstance.get(`api/comment/${id}`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Create Comment
export const createCommentData = async(data,id)=>{
    try{
        return await axiosInstance.post(`api/blog/${id}/comment/create`,data)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Catagory_all
export const catagory_all_Data = async()=>{
    try{
        return await axiosInstance.get(`api/showallcategory`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Category with post
export const category_with_postData = async(id)=>{
    try{
        return await axiosInstance.get(`api/category/post/${id}`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}


//Recent post
export const recent_post_Data = async()=>{
    try{
        return await axiosInstance.get(`api/letest-post`)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}

//Contact
export const contactData = async(data)=>{
    try{
        return await axiosInstance.post(`api/contact/create`,data)
    }catch(error){
        console.log('Error while fetching the signin api data.');
    }
}