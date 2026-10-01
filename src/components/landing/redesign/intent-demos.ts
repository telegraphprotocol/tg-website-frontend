// The canonical demo Intents, shared by the hero and the Alexandria preview. Illustrative data only.

export const RESOLVE_MS = 600;

// Timings for the automatic demos (hero and Alexandria preview)
export const TYPE_MS = 22; // per character while the demo types its question
export const PRESS_MS = 450; // pause between finishing the question and pressing Ask
export const HOLD_MS = 4200; // how long each answer stays on screen before the next Intent
export const FIRST_HOLD_MS = 3200; // how long the opening answer is held before the cycle starts

export type Provider = { name: string; grade: number; price: string };

export type Demo = {
  id: string;
  chip: string;
  query: string;
  intent: string;
  keywords: string[];
  result: string;
  detail: string;
  confidence: string;
  receipt: string;
  providers: Provider[];
};

export const DEMOS: Demo[] = [
  {
    id: "weather",
    chip: "Weather Forecast",
    query: "Will wind generation exceed 4GW in Texas tomorrow?",
    intent: "weather-forecast",
    keywords: ["wind", "weather", "forecast", "rain", "temperature"],
    result: "4.7 GW",
    detail: "Forecast peak wind generation, Texas, tomorrow. Above the 4 GW threshold.",
    confidence: "0.91",
    receipt: "0x7f3a…c91e",
    providers: [
      { name: "Forecast model", grade: 0.93, price: "$0.010" },
      { name: "Sensor API", grade: 0.88, price: "$0.008" },
      { name: "Satellite dataset", grade: 0.81, price: "$0.006" },
    ],
  },
  {
    id: "price",
    chip: "Price Direction",
    query: "Will BTC be higher in 1 hour?",
    intent: "price-direction",
    keywords: ["price", "btc", "eth", "higher", "lower", "direction"],
    result: "Up",
    detail: "Direction call for BTC over the next 1 hour.",
    confidence: "0.64",
    receipt: "0x2b9d…4e07",
    providers: [
      { name: "Quant model", grade: 0.9, price: "$0.010" },
      { name: "Sentiment API", grade: 0.86, price: "$0.008" },
      { name: "Order-book dataset", grade: 0.82, price: "$0.006" },
    ],
  },
  {
    id: "profile",
    chip: "Fake Profile Detection",
    query: "Is this dating profile fake?",
    intent: "fake-profile-detection",
    keywords: ["fake", "profile", "bot", "scam", "fraud"],
    result: "Likely fake",
    detail: "Profile flagged before a match is made.",
    confidence: "0.97",
    receipt: "0xa418…d3f2",
    providers: [
      { name: "Identity API", grade: 0.94, price: "$0.010" },
      { name: "Image-forensics service", grade: 0.91, price: "$0.008" },
      { name: "Behaviour dataset", grade: 0.83, price: "$0.006" },
    ],
  },
];

export function matchDemo(text: string): string | null {
  const q = text.toLowerCase();
  return DEMOS.find((d) => d.keywords.some((k) => q.includes(k)))?.id ?? null;
}
