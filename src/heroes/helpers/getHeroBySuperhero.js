import React from 'react';
import { heroes } from '../data/heroes';

export const getHeroBySuperhero = ( superhero = '' ) => {

  superhero = superhero.trim().toLocaleLowerCase();
  if(superhero === '') return [];
  
  return (
    heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(superhero))
  );
}
