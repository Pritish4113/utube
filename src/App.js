import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import SearchFeed from "./components/SearchFeed";

function App() {
  return (
    <BrowserRouter>
      <Box sx = {{backgroundColor : '#000'}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/channel/:id" element={<ChannelDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
 