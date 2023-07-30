"use client";
import Heading from "@/components/reusables/Heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { MessageCircle } from "lucide-react";
import { formSchema } from "./constants";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <div className="">
      <div>
        <Heading
          title="Conversation"
          description="Have intuitive convo with Jasper"
          icon={MessageCircle}
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"
        />
      </div>

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              className="w-full border rounded-lg p-2 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl>
                      <Input
                        className="outline-none border-0 focus-visible:ring-0 focus-visible::ring-transparent"
                        disabled={isLoading}
                        placeholder="How do i learn how to code?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="w-full col-span-12 lg:col-sapn-2">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-4">Responses</div>
      </div>
    </div>
  );
};

export default ConversationPage;
