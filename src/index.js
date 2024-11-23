import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact'
import AddContact from './pages/AddContact';

export default function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AddContact/>}/>
    <Route path="contact"element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
