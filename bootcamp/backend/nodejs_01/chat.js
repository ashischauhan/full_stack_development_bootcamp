import OpenAI from "openai";
import readlineSync from "readline-sync";

const OPEN_AI_API_KEY = "";

const client = new OpenAI({
  apiKey: OPEN_AI_API_KEY,
});

async function main() {
  const input = readlineSync.question("Enter your question: ");
  const response = await client.responses.create({
    model: "gpt-5-mini",
    instructions:
      "You are a helpful assistant. Keep your answer up to 3 lines only.",
    input,
  });
  console.log(response.output_text);
}
main();
