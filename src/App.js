import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeProvicer } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <YoutubeProvicer>
          <Outlet />
        </YoutubeProvicer>
      </QueryClientProvider>
    </>
  );
}

export default App;
