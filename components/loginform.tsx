"use client"

import CardWrapper from "./card-wrapper";
import Header from "./header-auth";
import * as z from "zod"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 

import { FormControl,FormMessage,FormDescription, Form, FormField,FormItem, FormLabel } from "@/components/ui/form";

import { LoginSchema } from "@/schema";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FormError } from "./form-error";

const LoginForm = () => {

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email:"",
            password:"",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>)=>{
        console.log(values)
    }

    return ( 
        <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't have an account?"
        backButtonhref="/auth/register"
        addSocial
        >
        <Form  {...form}>
            <form onSubmit ={form.handleSubmit(onSubmit)}
                className="space-y-4"
                >
                    <div className="space-y-4">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    Email
                                    <FormControl>
                                        <Input
                                        {...field}
                                        placeholder="codedash@email.com"
                                        type="email"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormLabel>
                            </FormItem>
                        )}
                        />
                              <FormField
                        control={form.control}
                        name="password"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    Your Password
                                    <FormControl>
                                        <Input
                                        {...field}
                                        placeholder="Your password"
                                        type="password"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormLabel>
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormError message="Something Went Wrong"/>
                    <Button
                    type="submit"
                    className="w-full"
                    >
                        Login
                    </Button>
            </form>
        </Form>
        </CardWrapper>
     );
}
 
export default LoginForm;