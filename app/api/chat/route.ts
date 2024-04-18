import { openai } from "@/src/lib/openai";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { prompt } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4-0125-preview",
    messages: [
      {
        role: "assistant",
        content: `Be an expert in ecology`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  return NextResponse.json({
    chat : response.choices[0].message.content,
  });
};

/*import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  return NextResponse.json({
    ok: true,
  });
};
*/
