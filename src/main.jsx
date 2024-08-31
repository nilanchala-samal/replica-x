import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './components/home/HomePage.jsx';
import Features from './components/features/Features.jsx';
import Blog from './components/blog/Blog.jsx';
import Pricing from './components/pricing/Pricing.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
    </Route>

  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
);
