
export async function get() {
  const res = await fetch('URL_DE_TU_API_STRAPI');
  const data = await res.json();
  return { body: data };
}
