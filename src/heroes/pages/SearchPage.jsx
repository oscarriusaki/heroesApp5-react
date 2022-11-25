import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHeroBySuperhero } from '../helpers/getHeroBySuperhero';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

  const { onChange, text} = useForm({
    text: '',
  });

  const navigator = useNavigate();
  const {search} = useLocation();
  const { q='' } = queryString.parse( search);

  const heroes = getHeroBySuperhero(q);
  
  const onInputSubmit = (value) => {
    
    value.preventDefault();
    if( text.length <= 1 ) return;

  }
   
  const onClickButton = () => {
    navigator(`?q=${text}`);
  } 
  
  return (
    <>
        <div className="row">
          <div className="col-5">
            <p>Searching hero</p>
            <hr />
            <form onSubmit={onInputSubmit}>
              <input 
                type="text" 
                placeholder='Search a hero'
                className='form-control'
                name='text'
                value={ text }
                onChange={ onChange }
                />
              <button 
                type='submit' 
                className='btn btn-outline-primary mt-2'
                onClick={onClickButton}
                >Search
              </button>
            </form>
          </div>
          <div className="col-7">
            <p>Results</p>
            <hr />
            {
              (q==='')
              ?
              <div className="alert alert-primary">
                Search a hero
              </div>
              : (heroes.length === 0) && 
              <div className="alert alert-danger">
                No hero with <b>abc</b>
              </div>
            }
            {/* hero */}
            {
              heroes.map(hero => (  
                <HeroCard  key={hero.id} {...hero} />
              ))
            }
          </div>
        </div>
    </>
  )
}
