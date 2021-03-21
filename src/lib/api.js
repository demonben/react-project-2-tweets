import axios from 'axios';

const BaseUrl = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/"

export async function getData(){
    const response = await axios.get(`${BaseUrl}/tweet`)
    return response.data.tweets;
}


export async function postData(value,userName){
    const date = new Date().toISOString()
    // { console.log(value)}
    // { console.log(userName) }
    const obj = { content: value, userName: userName, date: date  }
    try{
        const response = await axios.post(`${BaseUrl}/tweet`, obj)
        return response.data;
    }
    catch(err){
     alert("something goes wrong")
    }
}