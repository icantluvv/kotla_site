export async function getBrand(): Promise<Brand[]> {
  const response = await fetch(`${process.env.baseApi}brand`, {
    cache: 'no-store',
    credentials: 'same-origin',
  });
  const data = await response.json();

  const Brand: Brand[] = data.map((item: any) => ({
    id: item.id,
    Brand_Name: item.Brand_Name,
    Brand_Code: item.Brand_Code,
  }));

  return Brand;
}
