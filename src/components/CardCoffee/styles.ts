import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 0 1.5rem 1.25rem;
  position: relative;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  background: ${({ theme }) => theme['gray-500']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  img {
    transform: translateY(-2.5rem);
    margin-bottom: -1.75rem;
  }

  .tags {
    display: flex;
    gap: 0.25rem;
  }

  .tags span {
    background: ${({ theme }) => theme['yellow-100']};
    color: ${({ theme }) => theme['yellow-500']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
  }

  h1 {
    margin-top: 1rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${({ theme }) => theme['dark-500']}
  }
  
  .description{
    margin-top: 0.5rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: ${({ theme }) => theme['dark-100']};
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    color: ${({ theme }) => theme['dark-300']};
  }

  .price span {
    font-size: 14px;
    font-weight: 400;
  }

  .price strong {
    font-family: 'Baloo 2';
    font-size: 24px;
    font-weight: 800;
  }

  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
  
  .units {
    background: ${({ theme }) => theme['gray-700']};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .units button {
    border: transparent;
    background: transparent;
    color: ${({ theme }) => theme['purple-500']};
  }

  .units input {
    background: none;
    border: none;
    width: 1.25rem;
    text-align: center;
  }

  .units input::-webkit-outer-spin-button,
  .units input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }

  .wrapper span {
    background: ${({ theme }) => theme['purple-500']};
    color: ${({ theme }) => theme['gray-100']};
    padding: 0.5rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;