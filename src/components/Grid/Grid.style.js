import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 0;
  width: auto;
  height: 100%;
`;

export const ListItem = styled.img`
  width: 100%;
  height: 300px;
`;
