export async function getProduct(): Promise<Product[]> {
  const response = await fetch(`${process.env.baseApi}lipstick`, {
    cache: 'no-store',
    credentials: 'same-origin',
  });
  const data = await response.json();

  const Product: Product[] = data.map((item: any) => ({
    id: item.id,
    image: item.image,
    Price: item.Price,
    Color: item.Color,
    Name: item.Name,
    brand: {
      id: item.brand.id,
      Brand_Name: item.brand.Brand_Name,
      Brand_Code: item.brand.Brand_Code,
    },
  }));

  return Product;
}
