import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #f8f5f0;
`;

const Menubar = styled.div`
    display: flex;
    height: 100%;
    width: 95%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Menu = styled.div`
    @font-face {
        font-family: 'KCC-eunyoung';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KCC-eunyoung-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-size: 3.125rem;
    color: #413f3b;
    font-family: 'KCC-eunyoung';
    margin-bottom: 30px;
`;

const Meuns = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 45%;
    width: 80%;
`;

const Img = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    overflow: hidden;
`;

const Cafeteria = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const { selected, selectSchool } = location.state;
    const date = new Date();
    const time = `${String(date.getFullYear())}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;

    useEffect(()=> {
        async function info() {
            try {
                const response = await axios.get(
                  `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=eb857ecb039143fe8c5a40b3bb6205a4&Type=json&pindex=1&pSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=${selectSchool}&MMEAL_SC_CODE=${selected}&MLSV_YMD=${time}`
                  );

                setData(response.data.mealServiceDietInfo[1].row[0].DDISH_NM);
              } catch (e) {
                console.log(e);
                setData("오늘은 급식이 없습니다.");
              } finally {
                setLoading(false);
              }
        }
        info();
    }, [selected, time, selectSchool]);

    return (
        <MenuWrapper>
            <Img>
                <img src='https://cdn.pixabay.com/photo/2017/01/12/06/26/flowers-1973875__480.png' alt='나무' />
            </Img>
            <Menubar>
                {selected === '2' ? (
                    <Menu>
                        Lunch Menu
                    </Menu>
                ) : (
                    <Menu>
                        Dinner Menu
                    </Menu>
                )}
                {loading && (<div>로딩중</div>)}
                {data && (
                  <Meuns>
                      {data.split("<br/>").map((data, idx)=> (
                          <ul key={idx}>
                              <li>{data}</li>
                              <hr />
                          </ul>
                      ))}
                  </Meuns>
                )}
            </Menubar>
            <Img>
                <img src='https://cdn.pixabay.com/photo/2017/01/12/06/26/flowers-1973875__480.png' alt='나무' />
            </Img>
        </MenuWrapper>
    );
};

export default Cafeteria;