import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: var(--color-primary);
  color: #fff;
  padding: 8px 22px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: box-shadow 0.1s ease;

  position: relative;

  &:hover {
    background-color: #218838;
    box-shadow: 0px 15px 50px -8px var(--color-border);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);
  }
`;
