import axios from 'axios';

const BaseUrl = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/"

export async function getData(){
    const response = await axios.get(`${BaseUrl}/tweet`)
    console.log(response.data)
    return response.data.tweets;
}


// export async function postData(){
//     const response = await axios.post(`${BaseUrl}/tweet`)
//     return response.data 
// }