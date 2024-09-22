import { Button } from "@/components/ui/button";
import Link from "next/link";
import SearchBar from "../searchbar/SearchBar";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/login-button";

const Navbar = () => {
    return ( 
        <>
        <div className="p-4 ">
        <nav className="bg-black flex flex-row items-center justify-between p-4 rounded-lg">
            <Link href="/">
            <h1 className="text-white">Logo</h1>
            </Link>
            <ul className="text-white flex flex-row items-center justify-center space-x-4">
                <SearchBar/>
            </ul>
            <LoginButton>
            <Button>
                Login
            </Button>
            </LoginButton>
        </nav>
        </div>
        </>
     );
}
 
export default Navbar;