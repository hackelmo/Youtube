import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  console.log("íė¤í¸ ", process.env.REACT_APP_YOUTUBE_API_KEY);
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });
  return (
    <>
      <div className="mb-2">Videos {keyword ? `đ : ${keyword}` : "đĨ"} </div>
      {isLoading && <p>ëĄëŠė¤...</p>}
      {error && <p>ėëŦę° ę°ė§ëėėĩëë¤...</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
        {videos &&
          videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </ul>
    </>
  );
}
