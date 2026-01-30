
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Generates a fun and light-hearted birthday wish using Gemini.
 */
export const generateBirthdayWish = async (name: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const birthYear = 2006;
  const currentYear = 2026; 
  const age = currentYear - birthYear;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a FUN, WITTY, and LIGHT-HEARTED birthday message for ${name} on his 20th birthday.
    Base Text Idea: "يا دانييل، في هذا الثلاثين من يناير، تقف على عتبة العقد الثاني... أواصرنا رغم حداثتها عميقة... العشرين مرفأ بعد العواصف... موعدنا دافئ كفنجان قهوة".
    
    CRITICAL INSTRUCTION: Rewrite this base text to be much more entertaining, charming, and humorous (هضامة وخفة ظل). 
    - Make a joke about turning 20 (no longer a teen!).
    - Mention the "storm" and "coffee" in a funny way.
    - Keep it friendly and "cool".
    - One version in "Spoken/Modern Artistic Arabic" (Lebanese/Levantine flavor is a plus for humor).
    - One version in "Cool/Chic French".
    
    Format: Return JSON with:
    1. "arabic": The fun Arabic version.
    2. "french": The witty French version.
    3. "vibe": A fun one-word mood (e.g., "Legendary", "Groovy").`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          arabic: { type: Type.STRING },
          french: { type: Type.STRING },
          vibe: { type: Type.STRING }
        },
        required: ["arabic", "french", "vibe"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};
