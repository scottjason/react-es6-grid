import React from 'react';
import { List, ListItem } from './FlexBox.style';

const FlexBox = props => (
  <List>
    {props.images.map(image => {
      return <ListItem src={image} />
    })}
  </List>
)

export { FlexBox };
