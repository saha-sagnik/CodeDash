"use server"

import * as z from "zod";
import bcrypt, { hash } from "bcrypt"

import { RegisterSchema } from "@/schema";
import { db } from "@/lib/db";
import { error } from "console";
import { getUserByEmail } from "@/data/user";

export const register = async (values:z.infer<typeof RegisterSchema>)=>{
    const validateFields = RegisterSchema.safeParse(values);

    if(!validateFields.success){
        return {
            error: "Invalid fields!",
        }
    }

    const {email,password,name} = validateFields.data;
    const hashedPassword = await bcrypt.hash(password,10);

    const exisitngUser = await getUserByEmail(email);

    if(exisitngUser)
        return{
    error:"Email already in use!"
}

    await db.user.create({
        data:{
            email,
            name,
            password: hashedPassword,
        },
    });

    //Tode: send verification token number

    return {
        success: "Email sent!"
    }
};