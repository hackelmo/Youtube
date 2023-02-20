import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { search } from "../api/youtube";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => search(keyword));
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
