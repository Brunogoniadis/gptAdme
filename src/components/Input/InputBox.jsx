import { InputStyle } from "./styles";

// eslint-disable-next-line react/prop-types
const InputBox = ({ placeholder }) => {
  return (
    <InputStyle>
      <p>{placeholder}:</p>
      <input type="text"  />
      <div className="search-icon">
      </div>
    </InputStyle>
  );
};

export default InputBox;
