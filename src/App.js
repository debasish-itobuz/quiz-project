import "./App.css";
import "./index.css";
import image from "../src/images/image 19.png";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Question from "./Question";

function App() {
  const arr = [
    {
      name: "Quiz Title",
      id: 101,
      questions: "18 Questions",
      time: "30 min",
      img: image,
    },
    {
      name: "Quiz Title",
      id: 102,
      questions: "18 Questions",
      time: "30 min",
      img: image,
    },
    {
      name: "Quiz Title",
      id: 103,
      questions: "18 Questions",
      time: "30 min",
      img: image,
    },
    {
      name: "Quiz Title",
      id: 104,
      questions: "18 Questions",
      time: "30 min",
      img: image,
    },
    {
      name: "Quiz Title",
      id: 105,
      questions: "18 Questions",
      time: "30 min",
      img: image,
    },
    {
      name: "Quiz Title",
      id: 106,
      questions: "18 Questions",
      time: "30 min",
      img: image,
    },
    {
      name: "Quiz Title",
      id: 107,
      questions: "18 Questions",
      time: "30 min",
      img: image,
    },
    {
      name: "Quiz Title",
      id: 108,
      questions: "18 Questions",
      time: "30 min",
      img: image,
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home arr={arr}></Home>}></Route>
        <Route path="/question" element={<Question></Question>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
