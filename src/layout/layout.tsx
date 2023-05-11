import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AuthProvider from '../Context/AuthProvider';
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: any) => {

    return (
        <div>
            <AuthProvider>
                <Header></Header>
                {children}
                <Toaster />
                <Footer></Footer>
            </AuthProvider>
        </div>
    );
};

export default Layout;