import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imageURL =`/assets/heroes/${id}.jpg`;

  return (
    <>
        <div className="row">
            <div className="col-5">
                <img src={imageURL} alt={superhero} className='img img-thumbnail' />
            </div>
            <div className="col-7">
                <p>{superhero}</p>
                <p>{alter_ego}</p>
                {
                    (alter_ego !== characters)&& (<p>{characters}</p>)
                }

                <p className='text-muted'>{first_appearance}</p>
                <Link
                    to={`/hero/${id}`}
                    >Mas...
                </Link>
            </div>
        </div>
    </>
  )
}
