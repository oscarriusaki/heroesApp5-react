import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) => {

    const hero = ['DC Comics', 'Marvel Comics'];

    if(publisher.length === 0) return[];

    if(!hero.includes(publisher)){
        throw new Error(`No hero found with ${publisher}`);
    }

    return (
        heroes.filter(heroe => heroe.publisher === publisher)
    )
}