import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderInfos from "./components/HeaderInfos";

const App = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data));
  }, []);

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
      </header>
    </div>
  );
};

export default App;
