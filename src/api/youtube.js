import axios from "axios";

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopularVideo();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: { part: "snippet", q: keyword, maxResults: 25, type: "video" },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopularVideo(keyword) {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          regionCode: "KR",
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}