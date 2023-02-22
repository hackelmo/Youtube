import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  console.log("테스트 ", process.env.REACT_APP_YOUTUBE_API_KEY);
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });
  return (
    <>
      <div className="mb-2">Videos {keyword ? `🔍 : ${keyword}` : "🔥"} </div>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러가 감지되었습니다...</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
        {videos &&
          videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </ul>
    </>
  );
}
