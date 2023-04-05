import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: calc(100vh - 100px);
  padding: 0 2rem;
  margin: 0 auto;
  background: ${props => props.theme['white-100']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;