export default interface StripeProduct {
  id: string;
  name: string;
  description: string;
  sku?: string;
  price: number;
  currency: string;
  image?: string;
}
