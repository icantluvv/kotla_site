export async function getCart(): Promise<Cart[]> {
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

  const cart: Cart[] = data.cartItems.map((item: any) => ({
    CartItem: {
      id: item.id,
      Quantity: item.Quantity,
      lipstick: {
        id: item.lipstick.id,
        image: item.lipstick.image,
        Price: item.lipstick.Price,
        Color: item.lipstick.Color,
        Name: item.lipstick.Name,
        brand: item.lipstick.brand,
      },
    },
  }));

  console.log(cart);
  return cart;
}
