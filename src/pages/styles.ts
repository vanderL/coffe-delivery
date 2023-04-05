import styled from "styled-components";

interface ListIconProps {
  variable: 'cart' | 'timer' | 'package' | 'coffee';
}

export const HomeContainer = styled.section`
  display: flex;
  margin-top: 5.75rem;

  div {
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;
    }

    h3 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 300px;
      margin-top: 4rem;

      li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.75rem;
        color: ${({ theme }) => theme['dark-300']};
        font-size: 16px;
        margin-top: 1.25rem;
      }
    }
  }
`;

const BACKGROUND_COLORS = {
  cart: 'yellow-500',
  timer: 'yellow-300',
  package: 'dark-500',
  coffee: 'purple-300',
} as const;

interface ListIconProps {
  variable: keyof typeof BACKGROUND_COLORS,
}

export const ListIcon = styled.span<ListIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme['white-100']};

  background: ${({ theme, variable }) => theme[BACKGROUND_COLORS[variable]]};


`;
