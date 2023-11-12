import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./components/organisms/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import Search from "./components/pages/search/Search";
import MyShelf from "./components/pages/myShelf/MyShelf";
import AddBook from "./components/pages/addBook/AddBook";

const App = () => {
  return (
    <BrowserRouter>
      <div id="main_container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myShelf" element={<MyShelf />} />
          <Route path="/addBook" element={<AddBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
