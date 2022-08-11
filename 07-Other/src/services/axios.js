import axios from "axios";

const urlClientComputer = "https://httpbin.org/get";

export async function getClientPC() {
  try {
    const response = await axios(`${urlClientComputer}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

