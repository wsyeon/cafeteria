import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cafeteria from '../cafeteriaInfo/Cafeteria';
import Home from '../cafeteriaInfo/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/cafeteria" element={<Cafeteria />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;