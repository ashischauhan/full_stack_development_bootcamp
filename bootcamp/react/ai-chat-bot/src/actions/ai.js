import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function questionAI(question) {
  const response = await client.responses.create({
    model: "gpt-5-mini",
    instructions:
      "Imagine you are a lyricist. Create a song when you receive a prompt. Make it short and catchy. Return the answer in html format with line breaks and use tailwind css for styling. Exclude html, head and body tags from the response.",
    input: question,
  });
  return response.output_text;
}
