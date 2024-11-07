"use server"

import * as z from "zod";

import { LoginSchema } from "@/schema";
import { signIn } from "@/auth";
import { DEFAULT_LOGGEDIN_PATH } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values:z.infer<typeof LoginSchema>)=>{
    const validateFields = LoginSchema.safeParse(values);

    if(!validateFields.success){
        return {
            error: "Invalid fields!",
        }
    }

    const {email,password} = validateFields.data;

    try {

        await signIn("credentials",{
            email,password,
            redirectTo: DEFAULT_LOGGEDIN_PATH
        })
        
    } catch (error) {
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {error:"Invalid Credentials"};
                default:
                    return {error:"Something went wrong"};

            }
        }

        throw error
    }
};