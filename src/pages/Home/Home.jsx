import GitHubRepoScanner from "../../service/GitHubRepoScanner";
import IaFetch from "../../service/GoogleIAGemini";
import { useState } from "react";

export const Home = () => {
  const [fileContent, setFileContents] = useState(null);

  const [iaResponse, setIaResponse] = useState({});

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

  const handleSubmit = () => {
    fetchData();
  };
  return (
    <div
      style={{
        padding: "50px",
      }}
    >
      <h1> FlashME</h1>
      <p>Github generator IA</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <input
          placeholder="userName"
          value={userName}
          onChange={handleUserNameChange}
        />
        <input
          placeholder="repository"
          value={userRepo}
          onChange={handleUserRepoChange}
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
};

export default Home;
