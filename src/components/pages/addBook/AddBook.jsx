import { useDispatch } from "react-redux";
import { useState } from "react";
import "./AddBook.scss";
import { v4 as uuidv4 } from 'uuid';

import Input from "../../atoms/input/Input";

import { addBook } from "../../../store/slices/bookReducer";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
  const initialState = {
    id: uuidv4(),
    title: "",
    author: "",
    year: "",
    rating: "",
  };

  const [bookData, setBookData] = useState(initialState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(bookData));
    setBookData(initialState);
    navigate("/myShelf");
  };

  const handleChange = (e) => {
    setBookData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputDetails = [
    {
      type: "text",
      className: "form-control",
      name: "title",
      label: "Title",
      id: "title",
      required: true,
      ariaRequired: true,
      value: bookData.title,
      onChange: handleChange,
    },
    {
      type: "text",
      className: "form-control",
      name: "author",
      label: "Author",
      id: "author",
      required: true,
      ariaRequired: true,
      value: bookData.author,
      onChange: handleChange,
    },
    {
      type: "text",
      className: "form-control",
      name: "year",
      label: "Year",
      id: "year",
      required: true,
      ariaRequired: true,
      value: bookData.year,
      onChange: handleChange,
      maxLength: 4,
    },
    {
      type: "number",
      className: "form-control",
      name: "rating",
      label: "Rating",
      id: "rating",
      required: true,
      ariaRequired: true,
      value: bookData.rating,
      onChange: handleChange,
      min: 0.1,
      max: 5.0,
      step: 0.1,
    },
  ];

  return (
    <div id="addBook">
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="rendered-form">
          {inputDetails.map((input, i) => (
            <Input key={i} {...input} />
          ))}
          <div className="formbuilder-button form-group field-submit">
            <button
              type="submit"
              className="btn-default btn"
              name="submit"
              id="submit">
              Add a book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
