import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import DetailPhoto from "./pages/DetailPhoto";
import DetailPost from "./pages/DetailPost";
import DetailUser from "./pages/DetailUser";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <TopMenu />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Post />} />
          <Route exact path="/detail/:postid" element={<DetailPost />} />
          <Route exact path="/user/:userid" element={<DetailUser />} />
          <Route exact path="/photo/:photoid" element={<DetailPhoto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
