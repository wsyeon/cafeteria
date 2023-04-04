import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//import styled from 'styled-components';
import '../common/css/Cafeteria.css';

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
                  `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=eb857ecb039143fe8c5a40b3bb6205a4&Type=json&pindex=1&pSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=${selectSchool}&MMEAL_SC_CODE=${selected}&MLSV_YMD=20230404`
                  );

                setData(response.data.mealServiceDietInfo[1].row[0].DDISH_NM);
              } catch (e) {
                console.log(e);
                setData("오늘은 급식 없는데?");
              } finally {
                setLoading(false);
              }
        }
        info();
    }, [selected, time, selectSchool]);

    return (
        <div className='MenuWrapper'>
            <div className='Img ImgT'>
                <img src='https://cdn.pixabay.com/photo/2017/01/12/06/26/flowers-1973875__480.png' alt='나무' />
            </div>
            <div className='Menubar'>
                {selected === '2' ? (
                    <div className='Menu'>
                        Lunch Menu
                    </div>
                ) : (
                    <div className='Menu'>
                        Dinner Menu
                    </div>
                )}
                {loading && (<div>로딩중</div>)}
                {data && (
                  <div className='Menus'>
                      {data.split("<br/>").map((data, idx)=> (
                          <ul key={idx}>
                              <li>{data}</li>
                              <hr />
                          </ul>
                      ))}
                  </div>
                )}
            </div>
            <div className='Img ImgB'>
                <img src='https://cdn.pixabay.com/photo/2017/01/12/06/26/flowers-1973875__480.png' alt='나무' />
            </div>
        </div>
    );
};

export default Cafeteria;