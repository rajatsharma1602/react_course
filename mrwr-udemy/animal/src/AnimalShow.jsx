import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import gator from './svg/gator.svg'
import cow from './svg/cow.svg';
import dog from './svg/dog.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import "./Animal.css"
import { useState } from 'react';



const svgMap = {
    cow, bird, gator, cat, dog, horse
}

function AnimalShow({ type }) {
    const [likes, setLikes] = useState(0);
    const updateLike = () => {
        if (likes < 16) { setLikes(likes + 1); }
    }

    return (
        <div className="box" onClick={updateLike} >
            <img src={svgMap[type]} className='animal' alt={svgMap[type]} />

            <img className="heart" src={heart} alt={heart} style={{ width: 10 + (likes * 10) + 'px' }} />


        </div>);
}

export default AnimalShow;