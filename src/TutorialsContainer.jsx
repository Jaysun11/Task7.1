
import React from 'react'
import {Card} from 'semantic-ui-react'
import tutorials from './tutorials';
import Tutorial from './Tutorial';

function TutorialsContainer(){
    const tutorialList = tutorials.map((tutorial, index) =>
        <Tutorial key={index}
        name={tutorial.name} 
        img = {tutorial.img}
        description = {tutorial.description}
        rating = {tutorial.rating}
        username = {tutorial.username}
        />
    );

    return (

        <Card.Group className='centered'>

            {tutorialList}

        </Card.Group>
    
    )
   
}
export default TutorialsContainer