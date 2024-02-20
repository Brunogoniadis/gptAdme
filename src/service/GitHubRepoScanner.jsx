import axios from "axios";

async function fetchData(owner, repo, path, files, fileContents) {
  try {
    const token =
      "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";

    const fileListResponse = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );


    const filesData = await Promise.all(
      fileListResponse.data.map(async (file) => {
        if (file.type === "file") {
          const ignoreThisExtensions =
            /\.(jpg|jpeg|png|gif|bmp|svg|log|local|idea|DS_Store|sln|swp|gitignore|eslintrc|cjs|lock|config.js|md)$/i.test(
              file.name
            );
          if (!ignoreThisExtensions) {
            const fileResponse = await axios.get(file.download_url);
            return { name: file.name, content: fileResponse.data };
          }
        } else if (file.type === "dir") {
          return fetchData(owner, repo, file.path, files, fileContents);
        }
      })
    );

    const resolvedFilesData = filesData
      .filter(Boolean)
      .reduce((accumulator, data) => {
        if (Array.isArray(data)) {
          accumulator.push(...data);
        } else {
          accumulator.push(data);
        }
        return accumulator;
      }, []);

    resolvedFilesData.forEach((fileData) => {
      files.push(fileData.name);
      fileContents[fileData.name] = fileData.content;
    });
  } catch (error) {
    console.error("Erro in git:", error);
    throw error;
  }
}
export default async function GitHubRepoScanner(owner, repo) {
  const files = [];
  const fileContents = {};

  try {
    await fetchData(owner, repo, "", files, fileContents);

    return { files, fileContents };
  } catch (error) {
    console.error("Erro ao buscar o repositório:", error);
    throw error;
  }
}
