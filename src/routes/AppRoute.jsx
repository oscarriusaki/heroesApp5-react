import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { HeroRoute } from '../heroes/router/HeroRoute';

export const AppRoute = () => {
  return (
    <>
        <Routes>
            <Route path='/login' element={<LoginPage /> } />
            <Route path='/*' element={<HeroRoute /> } />
        </Routes>
    </>
  )
}
