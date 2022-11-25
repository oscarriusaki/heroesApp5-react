import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

export const HeroePage = () => {

  const { id } = useParams();
  const hero = getHeroById(id);

  const navigator = useNavigate();

  const onBack = () => {
    navigator(-1);
  }

  return (
    <>
        <div className="row">
          <div className="col-5">
            <div className="card">
                <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className='img img-thumbnail' />
            </div>
          </div>
          <div className="col-7">
            <span>{hero.superhero}</span>
            <p> <b>publisher: </b> {hero.publisher}</p>
            <p className='card-text'> <b>first_appearance: </b> {hero.first_appearance}</p>
            <p> <b>characters: </b> {hero.characters}</p>
            <button 
              className='btn btn-outline-primary'
              onClick={onBack}
              >back</button>
          </div>
        </div>
    </>
  )
}
