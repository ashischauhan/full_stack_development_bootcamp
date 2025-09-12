import OpenAI from "openai";
import readlineSync from "readline-sync";

const OPEN_AI_API_KEY =
  "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";

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
