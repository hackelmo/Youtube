import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["realated", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러가 감지되었습니다...</p>}

      <ul>
        {videos &&
          videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
      </ul>
    </>
  );
}
