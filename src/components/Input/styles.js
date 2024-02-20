import styled from "styled-components";

export const InputStyle = styled.div`
  position: relative;


  p{
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 5px;
    margin-top: 15px;
  }

  input {
    height: 34px;
    padding-left: 12px;
    border: 1px solid var(--color-border);
    background-color: var(--color-background);
    border-radius: 4px;
    outline: none;
    font-size: 13px;
    color: var(--color-text);
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 5px;
    font-weight: normal
  }
  input:focus {
    border: 2px solid var(--color-success);
  }

  input::placeholder {
    color: var(--color-text-code);
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    fill: var(--color-text-code);
  }
`;
