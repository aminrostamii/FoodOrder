import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <div className=" min-h-screen">
          <Header/>
            {children}
          <Footer/>
        </div>
    );
}

export default Layout;
