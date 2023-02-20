import { createContext, useContext } from "react";
import fakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";

const YoutubeApiContext = createContext();

//인스턴스를 한번만 만들어서 value에 넣자
// const youtube = new Youtube();
const youtube = new fakeYoutube();

export function YoutubeProvicer({ children }) {
  return (
    //class 자체를 담자
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

//useContext 해당부분 내보내기
export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
