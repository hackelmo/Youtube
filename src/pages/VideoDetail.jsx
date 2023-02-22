import React from "react";
import ChannelInfo from "../components/ChannelInfo";
import { useLocation } from "react-router-dom";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          title="YoutubePlayer"
        ></iframe>
        <div className="p-8">
          <h2 className="text-xl font-bold ">{title}</h2>
          {/* 채널아이디가 없으므로 채널 info를 만들어서 받아오자 */}
          <ChannelInfo id={channelId} title={channelTitle} />
          <pre className="whitespace-pre-wrap"> {description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
