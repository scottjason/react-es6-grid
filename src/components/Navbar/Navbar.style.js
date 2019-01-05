import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: green;
`;

export const Inner = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  max-width: 1024px;
  margin: 0 auto;
  z-index: 1;
  background-color: orange;
`
