

const apiKey = "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";

const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";
const prompt = "Generate 5 random English words and their meanings:";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};

const wordListElement = document.getElementById("word-list");
const generateWordsButton = document.getElementById("generate-words");

generateWordsButton.addEventListener("click", () => {
  fetch(apiUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: "\n",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const words = data.choices[0].text.trim().split("\n");
      wordListElement.innerHTML = "";

      words.forEach((word) => {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        wordListElement.appendChild(listItem);
      });
    });
});
