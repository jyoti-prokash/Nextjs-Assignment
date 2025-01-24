export default async function AllData() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  return result.json();
}
