import axios from "axios";

export default class fakeYoutube {
  constructor() {}
  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopularVideo();
  }
  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopularVideo(keyword) {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
