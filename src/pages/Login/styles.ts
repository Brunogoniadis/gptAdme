import styled from "styled-components";

export const Content = styled.div`
  width: 60%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 25vh;
  gap: 5px;
  padding: 18px;

  border-radius: 5px;

  background: var(--color-background);
  
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  strong {
    width: 100%;
    color: var(--color-text-code);
  }

  h1 {
    font-size: 2em;
    color: var(--color-text-code);
  }

  h3 {
    margin-top: 2px;
    margin-bottom: 12px;
  }
  p {
    font-weight: 300;
  }

  .horizontal-line {
    width: 100%;
    border: 1px solid var(--color-border);
    margin-top: 4px;
    margin-bottom: 12px;
  }
`;
export const RedirectContent = styled.div`
  width: 60%;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .button-container {
    width: 40%;
    height: 80%;
    padding: 18px;
    box-shadow: 0px 0px 15px -8px var(--color-border);

    border: 1px solid var(--color-border);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    text-align: center;
    gap: 2vh;
  }
  Button {
    margin-top: 2vh;
  }
`;
