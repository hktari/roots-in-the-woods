type StripeProduct = {
  id: string;
  name: string;
  description: string;
  sku?: string;
  price: number;
  currency: string;
  image?: string;
};

export default StripeProduct;
