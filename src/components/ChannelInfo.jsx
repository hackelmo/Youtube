import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ title, id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: url,
  } = useQuery(["channel", id], () => youtube.channelImageUrl(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러가 감지되었습니다...</p>}
      {url && (
        <div className="flex items-center my-4 mb-8">
          <img className="w-10 h-10 rounded-full" src={url} alt="채널이미지" />
          <div className="text-lg font-medium ml-2">{title}</div>
        </div>
      )}
    </>
  );
}
