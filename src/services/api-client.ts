import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e9e299e2b1c2437ca665d36b95d91efc",
  },
});
