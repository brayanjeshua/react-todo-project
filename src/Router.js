import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import {HomePage} from './views/HomePage';
import {CreatePage} from './views/EditPage';
import {EditPage} from './views/EditPage';

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new" element={<CreatePage/>} />
                <Route path="/edit/:text" element={<EditPage />} />
            </Routes>
        </HashRouter>
    )
}

export { Router };