import { useState } from "react";
import GitHubRepoScanner from "./service/GitHubRepoScanner";
import IaFetch from "./service/GoogleIAGemini.jsx";
function App() {
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

  console.log("fileContents", fileContent);
  console.log("iaResponse", iaResponse);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserRepoChange = (event) => {
    setUserRepo(event.target.value);
  };

  const handleSubmit = () => {
    fetchData();
    console.log("Username:", userName);
    console.log("Repository:", userRepo);
  };
  return (
    <div>
      <h1>GitHub Repository Scanner</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
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
}

export default App;
