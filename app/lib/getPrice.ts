export async function getPrice(): Promise<Price> {
  const response = await fetch(`${process.env.baseApi}cart`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    credentials: 'same-origin',
  });

  const data = await response.json();

  const price: Price = {
    Total_Amount: data.Total_Amount,
  };

  return price;
}
