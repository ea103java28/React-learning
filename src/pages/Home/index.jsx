import { useState } from "react";

import Edit from "./components/Edit.jsx";
import List from "./components/List.jsx";
import "./index.css";

const Home = () => {
  // const [a, setA] = useState(100)
  // function plus() {
  //     setA(function (prev) {
  //         return prev + 200
  //     })
  // }

  const [data, setData] = useState([]); //內容物有三個

  return (
    <div className="app">
      {/* {a}
        <button onClick={plus}>加法</button> */}

      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
