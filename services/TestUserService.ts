import axios from "axios"
export class TestUserService{
    private static URL: string = "https://mocki.io/v1/a8d8349d-f494-4855-a329-b3b6fa8b8e50"

    public static getAllUser(){
        let UserURL: string = `${this.URL}`
        return axios.get(UserURL)
    }
}