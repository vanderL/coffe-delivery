import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 0.75rem;
      border: none;
    }

    .localization {
      background: ${({ theme }) => theme['purple-100']};
      color: ${({ theme }) => theme['purple-500']};
    }

    .cart {
      background: ${({ theme }) => theme['yellow-100']};
      color: ${({ theme }) => theme['yellow-500']};
    }
  }
`;