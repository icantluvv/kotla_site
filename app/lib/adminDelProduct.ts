export async function adminDelProduct(prop: number): Promise<any> {
  const response = await fetch(`${process.env.baseApi}lipstick/${prop}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    credentials: 'same-origin',
  });

  const data = await response.json();

  return data;
}
