import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './globals.css'

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
