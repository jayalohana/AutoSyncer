"use client";

import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EditUserProfileSchema } from "@/lib/types";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {};

const ProfileForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    // Perform form submission logic here
    setIsLoading(false);
  };

  return (
    <Form {...form} onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="flex flex-col gap-6">
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Full name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={true}
                  placeholder="Email"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            "Save User Settings"
          )}
        </Button>
      </div>
    </Form>
  );
};

export default ProfileForm;
