import React from "react";
import ChannelInfo from "../components/ChannelInfo";
import { useLocation, useParams } from "react-router-dom";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
        ></iframe>
        <h2>{title}</h2>
        {/* 채널아이디가 없으므로 채널 info를 만들어서 받아오자 */}
        <ChannelInfo id={channelId} title={channelTitle} />
        <pre>{description}</pre>
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
