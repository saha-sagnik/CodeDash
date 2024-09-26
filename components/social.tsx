"use client"

import { FaGoogle } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Button } from "./ui/button";


const Social = () => {
    return ( 
        <div className="flex items-center w-full gap-x-2">
            <Button size="lg" 
            className="w-full"
            variant="outline"
            onClick={()=>{}}
            >
                <FaGoogle className="h-5 w-5"/>
            </Button>
            <Button size="lg" 
            className="w-full"
            variant="outline"
            onClick={()=>{}}
            >
                <SiLeetcode className="h-5 w-5"/>
            </Button>
        </div>
     );
};
 
export default Social;