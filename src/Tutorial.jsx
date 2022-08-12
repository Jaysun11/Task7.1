
import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'


function Tutorial(props){

    return (

        <Card>
        <Image src={props.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>
          {props.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <h3>
            <Icon name='star' />
            <span>{props.rating} {props.username}</span>
          </h3>
        </Card.Content>
      </Card>

    )
   
}
export default Tutorial