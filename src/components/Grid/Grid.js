import React from 'react';
import { List, ListItem } from './Grid.style';

const Grid = props => {
  console.log('Grid', props)
  return(
    <List>
      {props.images.map(image => {
        return <ListItem src={image} />
      })}
    </List>
  )
}

export { Grid };
