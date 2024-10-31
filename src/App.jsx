import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about-us' element={<AboutUsPage />} />
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router}>
      <MainLayout /> {/* Renders your layout and child components */}
    </RouterProvider>
  );
}

export default App

