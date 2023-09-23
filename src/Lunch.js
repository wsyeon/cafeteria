import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Lunch = () => {
  const [storeList, setStoreList] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const onMakeList = async () => {
    // const randomPage = Math.trunc(Math.random() * 119) + 1;
    try {
      const { data } = await axios.get(
        `https://api.odcloud.kr/api/15052326/v1/uddi:5cdb0f3f-98f3-48c2-86bd-bba897323aac?serviceKey=${API_KEY}&page=1&perPage=119&returnType=json`
      );
      const filtered = data.data.filter(
        (info) =>
          info["행정동"].includes("중앙동") ||
          info["행정동"].includes("행운동") ||
          info["행정동"].includes("청룡동")
      );
      setStoreList(filtered);
      console.log(filtered);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <MainView>
      {storeList.map((data, idx) => (
        <div
          key={idx}
          style={{ marginBottom: "1rem", border: "2px solid #e3e3e3" }}
        >
          <div>가게명: {data["업소명"]}</div>
          <div>주소: {data["소재지(지번)"]}</div>
        </div>
      ))}
      <button onClick={onMakeList}>버튼</button>
    </MainView>
  );
};

export default Lunch;

const MainView = styled.div`
  width: 25.75rem;
  height: 100vh;
  border: 1px solid #000;
  background-color: #fff;
  overflow: auto;
`;
