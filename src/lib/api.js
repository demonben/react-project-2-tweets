import axios from 'axios';

const BaseUrl = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/"

export async function getData(){
    const response = await axios.get(`${BaseUrl}/tweet`)
    return response.data.tweets;
}


export async function postData(value){
    const date = new Date().toISOString()
    
    const obj = { content: value, userName: "Dima", date: date  }
    console.log(obj)
    const response = await axios.post(`${BaseUrl}/tweet`, obj)
    return response.data;
}