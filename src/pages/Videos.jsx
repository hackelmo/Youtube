import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    return youtube.search(keyword);
  });
  return (
    <>
      <div>핫한 비디오{keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러가 감지되었습니다...</p>}
      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </>
  );
}
