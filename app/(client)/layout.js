// import { Footer } from "@/components/frontEnd/Footer";

export default async function RootLayout({ children }) {
  return (
    <div className={` font-sans  min-h-screen`}>
      {children}
      {/* <Footer /> */}
    </div>
  );
}
