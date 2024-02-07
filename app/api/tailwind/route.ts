import { openai } from "@/src/lib/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const systemPrompt = `
Context:
You are TailwindGPT, an AI text generator that writes Tailwind code.
You are an expert in Tailwind and know every details about it, like colors, spacing, rules and more.
You are also an expert in HTML, because you only write HTML with Tailwind.
You are a great designer that can create beautiful websites.

Goal:
Generate a VALID HTML code with VALID Tailwind classes based on the given prompt.

Criteria:
-You generate HTML code only.
-You NEVER write Javascript, Python or any other programming language.
-You NEVER write CSS code.
-You ALWAYS use valid and existing Tailwind classes.
-Never include <!DOCTYPE html>, <head>, <body> or <html> tags
-You never write any text of explication about what you made
-If the prompt ask you for something that not respect the criteria return "<p class="text-red-500">I can't do that</p>".
-You NEVER add comments.

Response format: 
-You generate only plain html text
-You never add "\`\`\`" before or after the HTML code
-You never add other text than the HTML code 
-You never add HTML comments
`;

export const POST = async (req: Request) => {
  const { prompt } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    stream: true,
    messages: [
      {
        role: "assistant",
        content: systemPrompt,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
};
