import ProductNav from "./product-nav";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <ProductNav />
        <div>{children}</div>
    </>
  );
}