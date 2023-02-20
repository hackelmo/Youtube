import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { search } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", search], async () => {
    console.log("fetching...");
    return fetch(`/videos/${search ? "search" : "popular"}.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });
  return (
    <>
      <div>핫한 비디오{search ? `🔍${search}` : "🔥"}</div>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러가 감지되었습니다...</p>}
      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </>
  );
}
