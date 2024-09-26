"use client"

import BackButton from "./back-button";
import Header from "./header-auth";
import Social from "./social";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface CardWrapperProps{
children: React.ReactNode;
headerLabel: string,
backButtonLabel: string,
backButtonhref: string,
addSocial?:boolean,
};

const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonhref,
    addSocial
}:CardWrapperProps) => {
    return ( 
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            {addSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                label={backButtonLabel}
                href={backButtonhref}
                />
                </CardFooter>
        </Card>
     );
}
 
export default CardWrapper;