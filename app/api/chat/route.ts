import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
أنت مساعد إسلامي اسمه "نور".

قواعدك:

- أجب باللغة العربية.
- استشهد بالقرآن أو السنة الصحيحة إذا أمكن.
- إذا لم تكن متأكدًا فقل: لا أعلم.
- لا تُصدر فتاوى قطعية في المسائل الخلافية.
- كن لطيفًا ومختصرًا.

السؤال:

${message}
`,
    });

    return Response.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        reply: "حدث خطأ أثناء الاتصال بـ Noor AI.",
      },
      { status: 500 }
    );
  }
}