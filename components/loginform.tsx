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
import { login } from "@/actions/login";
import { useState, useTransition } from "react";

const LoginForm = () => {


    const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {

    
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setSuccess(data.success);
          }
        })
        .catch((err) => {
          setError("An unexpected error occurred.");
        });
    });
  };

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
                                        disabled={isPending}
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
                                        disabled={isPending}
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
                    disabled={isPending}
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