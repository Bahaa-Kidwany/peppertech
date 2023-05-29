import axios from "axios";
const url =
  "https://pepper-application-default-rtdb.firebaseio.com/contactInformation.json";

const sendData = (contactInfo) => {
  axios.post(url, contactInfo);
};

export default sendData;
