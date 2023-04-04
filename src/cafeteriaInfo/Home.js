import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CafeteriaWrapper = styled.div`
    border: 1px solid red;
`;

const Home = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");
    const [selectSchool, setSelectSchool] = useState("");
    
    const test = ()=> {
        if ((selected === '' || selected === '1') || (selectSchool === '' || setSelectSchool === '1')) {
            alert('선택해주세요');
        } else {
            navigate('/cafeteria', { state: { selected: selected, selectSchool: selectSchool } });
        }
    };

    const onSelect = (e)=> {
        const { target: { name, value } } = e;

        if (name === 'school') {
            setSelectSchool(value);
        }

        if (name === 'cafeteria') {
            setSelected(value);
        }
    }

    return (
        <CafeteriaWrapper>
            <div>
                어떤 급식을 볼까? 
                <select name="school" onChange={onSelect}>
                    <option value='1'>학교 선택</option>
                    <option name='school' value="7010132">광성고</option>
                    <option name='school' value="7010547">이대부고</option>
                </select>
                <select name="cafeteria" onChange={onSelect}>
                    <option value='1'>선택하기</option>
                    <option value="2">중식</option>
                    <option value="3">석식</option>
                </select>
            </div>
            <div>
                <button onClick={test}>보러 가기</button>
            </div>
        </CafeteriaWrapper>
    );
};

export default Home;