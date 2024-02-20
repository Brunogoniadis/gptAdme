import GitHubRepoScanner from "../../service/GitHubRepoScanner";
import IaFetch from "../../service/GoogleIAGemini";
import InputBox from "../../components/Input/InputBox";
import { useState } from "react";
import { MainPage } from "./style";
import ReactMarkdown from "react-markdown";

export const Home = () => {
  const [fileContent, setFileContents] = useState(null);

  const [iaResponse, setIaResponse] = useState("");

  const [userName, setUserName] = useState("");
  const [userRepo, setUserRepo] = useState("");

  async function fetchData() {
    try {
      const { fileContents } = await GitHubRepoScanner(userName, userRepo);
      setFileContents(fileContents);

      if (fileContents !== null && Object.keys(fileContents).length !== 0) {
        try {
          const myJSON = JSON.stringify(fileContents);

          const { text } = await IaFetch(myJSON);
          setIaResponse(text);
        } catch (error) {
          console.error("Erro in IA:", error);
        }
      }
    } catch (error) {
      console.error("Erro in git:", error);
    }
  }

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserRepoChange = (event) => {
    setUserRepo(event.target.value);
  };

  useState(() => {
    console.log(userRepo);
  }, [userRepo]);

  useState(() => {
    console.log(userName);
  }, [userName]);

  const handleSubmit = () => {
    fetchData();
  };
  return (
    <MainPage>
      <div className="form-div">
        <h1> .</h1>
        <p>Github Readme generator with IA</p>
        <InputBox
          placeholder="GitHub user name" 
          value={userName}
          onChange={handleUserNameChange} 
        />
        <InputBox
          placeholder="repository name"
          value={userRepo}
          onChange={handleUserRepoChange}
        />
        <button onClick={handleSubmit}>submit</button>
      </div>

      {iaResponse !== null && ( 
        <div className="text-div">
          <ReactMarkdown>{iaResponse}</ReactMarkdown>
        </div>
      )}
    </MainPage>
  );
};

export default Home;
