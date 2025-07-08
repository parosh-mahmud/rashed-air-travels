import { Inter } from "next/font/google";
import "./globals.css";

// You will need to create these Header and Footer components
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

// Initialize the Inter font with a subset for performance
const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO and browser tabs
export const metadata = {
  title: "Rashed Air Travels",
  description: "Your trusted partner for air travel and tours.",
};

/**
 * This is the Root Layout component. It's a mandatory file in the App Router.
 * It wraps every page in your application and defines the main page structure.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components (the actual pages) to be rendered.
 * @returns {JSX.Element} The root HTML structure of the application.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        {/*
          This div uses a flexbox column layout to structure the page.
          - `flex flex-col`: Arranges children (Header, main, Footer) vertically.
          - `min-h-screen`: Ensures the layout takes up at least the full height of the viewport.
        */}
        <div className="flex flex-col min-h-screen">
          <Header />

          {/*
            The <main> element holds the primary page content.
            - `flex-grow`: Allows this element to expand and fill any available space,
              pushing the Footer to the bottom of the page.
            - `container mx-auto p-4 sm:p-6`: Centers the content and adds padding.
          */}
          <main className="flex-grow container mx-auto p-4 sm:p-6">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
