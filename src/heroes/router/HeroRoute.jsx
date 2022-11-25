import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/navbar'
import { DcPage } from '../pages/DcPage'
import { HeroePage } from '../pages/HeroePage'
import { MarvelPage } from '../pages/MarvelPage'
import { SearchPage } from '../pages/SearchPage'

export const HeroRoute = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<MarvelPage /> } />
            <Route path='/dc' element={<DcPage /> } />
            <Route path='/search' element={<SearchPage /> } />
            <Route path='/hero/:id' element={<HeroePage />} />
            <Route path='/*' element={<Navigate to='/' /> } />
        </Routes>
    </>
  )
}
