interface Brand {
  id: number;
  Brand_Name: string;
  Brand_Code: number;
}

interface BrandsProps {
  brand: Brand;
}

interface Product {
  id: number;
  image: string;
  Price: number;
  Color: string;
  Name: string;
  brand: Brand;
}

interface ProductProps {
  product: Product;
}

interface Cart {
  CartItem: {
    id: number;
    Quantity: number;
    lipstick: Product;
  };
}

interface CartProps {
  cart: Cart[];
}

interface Profile {
  id: number;
  email: string;
  password: string;
  Nickname: string;
  Phone: strings;
}

interface ProfileProps {
  profile: Profile[];
}

interface Price {
  Total_Amount: number;
}
