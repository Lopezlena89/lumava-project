import { Navbar } from "@/components/navbar/Navbar";

export default async function CheckoutLayout({children}: {
 children: React.ReactNode;
}) {

  return (
    <>
    <div className="w-screen h-screen">
        <Navbar/>
        { children }
    </div>
    </>
  );
}