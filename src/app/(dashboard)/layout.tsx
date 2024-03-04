import { Navbar } from "@/components/navbar/Navbar";
import { NavbarMovil } from "@/components/navbar/NavbarMovil";

export default async function CheckoutLayout({children}: {
 children: React.ReactNode;
}) {

  return (
    <>
    <div className="w-full h-full">
        <Navbar/>
        <NavbarMovil/>
        { children }
    </div>
    </>
  );
}