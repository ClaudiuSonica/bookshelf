import "./Sidebar.scss";

import logo from "/assets/logo.png";
import home from "/assets/icon-home.png";
import search from "/assets/icon-search.png";
import bookshelf from "/assets/icon-bookshelf.png";
import addBook from "/assets/icon-contribute.png";

import MenuItem from "../../molecules/menuItem/MenuItem";

const Sidebar = () => {
  const items = [
    {
      img: home,
      label: "Home",
      alt: "home",
      path: "/",
    },
    {
      img: search,
      label: "Search",
      alt: "search",
      path: "/search",
    },
    {
      img: bookshelf,
      label: "Bookshelf",
      alt: "my bookshelf",
      path: "/myShelf",
    },
    {
      img: addBook,
      label: "Contribute",
      alt: "add book",
      path: "/addBook",
    },
  ];

  return (
    <div id="sidebar">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu">
        {items.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
