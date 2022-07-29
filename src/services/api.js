import axios from 'axios';
const url="http://localhost:3000/user";

export const getallUsers=async(id)=> {
    id = id || ' ';
    return await axios.get(`${url}/${id}`);

};

export const addUser=async(user)=>{
    return await axios.post(url,user)

};



export const editUser=async(id)=>{
    id = id || ' ';
    return await axios.put(`${url}/${id}`)
}

export const deleteUser=async(id)=>{
    id = id || ' ';
    return await axios.delete(`${url}/${id}`)

}