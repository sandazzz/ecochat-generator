// import the OpenAI API client (that's edge friendly!)
import { openai } from "@/src/lib/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

//Create a systemPrompt for prompt engenering
/*const systemPrompt = `
Context :
You are MyAi an ai text generetor that answer to question about ecology.
You are an expert in the domain of ecology and environement. 

Goal : 
Answer with the best precision with some example based on the given prompt.

Criteria : 
-Anwser in english if the question is in english
-Anwser in french if the question is in french
-if it is not a question about ecology respond that you can't anwser

`*/

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
