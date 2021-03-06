import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "832dd4e7-ef90-497b-a369-feb6fc567a60"
    }
});


export  const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response  => {
            return response.data
        });

    }
}





