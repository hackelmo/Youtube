import axios from "axios";

export const search = async (search) => {
  return axios
    .get(`/videos/${search ? "search" : "popular"}.json`)
    .then((res) => res.data.items);
};
