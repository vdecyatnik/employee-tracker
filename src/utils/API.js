import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

// const APIKEY = "&apikey=trilogy";

const API = {
  getEmployees: function (employees) {
    return axios.get(BASEURL + `?results=${employees}`);
  },
};

export default API;