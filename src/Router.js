import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import {HomePage} from './views/HomePage';
import {CreatePage} from './views/CreatePage';
import {EditPage} from './views/EditPage';

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new" element={<CreatePage/>} />
                <Route path="/edit/:id" element={<EditPage />} />
                <Route path="*" element={<p>Not Found</p>} />
            </Routes>
        </HashRouter>
    )
}

export { Router };