export async function fetcher<T>(uri: string, init?: RequestInit): Promise<T> {
  const response = await fetch(uri, init);

  if (response.status === 404) {
    throw new Response(null, { status: 404, statusText: "Not found" });
  }
  if (!response.ok) throw new Error("Could not fetch data!");
  return response.json();
}
