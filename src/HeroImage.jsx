import LazyHero from 'react-lazy-hero';
import React from 'react'

function HeroImage(){
    return (

        <div>
            <LazyHero imageSrc="https://unsplash.it/2000/1000" opacity={0.3} className="headerImage">
                <h1>Dev @ Deakin</h1>
            </LazyHero>

        </div>

    )
   
}
export default HeroImage