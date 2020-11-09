import * as axios from "axios";

export const burgersAPI = {
    getBurgers() {
    debugger;
        return axios.get('http://localhost:3000/burgers.json')
        .then(response => {
          return response.data;
        })
    }
}
