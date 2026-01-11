export async function POST(event) {
  const data = await event.request.json();

  console.log(data);

  return data;
}