"use client"

import CardWrapper from "./card-wrapper";
import Header from "./header-auth";
import * as z from "zod"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 

import { FormControl,FormMessage,FormDescription, Form, FormField,FormItem, FormLabel } from "@/components/ui/form";

import { RegisterSchema} from "@/schema";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FormError, FormSucess } from "./form-error";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";

const RegisterForm= () => {


    const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name:"",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    
    startTransition(() => {
      register(values)
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
        headerLabel="Create your account"
        backButtonLabel="Already have an account?"
        backButtonhref="/auth/login"
        addSocial
        >
        <Form  {...form}>
            <form onSubmit ={form.handleSubmit(onSubmit)}
                className="space-y-4"
                >
                    <div className="space-y-4">

                    <FormField
                        control={form.control}
                        name="name"
                      
                        render={({field})=>(

                          
                            <FormItem>
                                <FormLabel>
                                    Your Name
                                    <FormControl>
                                        <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Your Name"
                                        
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormLabel>
                            </FormItem>
                        )}
                        />


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
                    <FormError message={error}/>
                    <FormSucess message={success}/>
                    <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full"
                    >
                        Create an Account
                    </Button>
            </form>
        </Form>
        </CardWrapper>
     );
}
 
export default RegisterForm;