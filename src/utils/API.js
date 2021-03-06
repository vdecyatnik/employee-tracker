import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=30&nat=US";

const API = {
  getEmployees: async function (employees) {
     const {data} = await axios.get(BASEURL + `?results=${employees}`);
    return data
  },
};



export default API;
