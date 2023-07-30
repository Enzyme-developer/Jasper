"use client";
import Heading from "@/components/reusables/Heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { formSchema } from "./constants";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChatCompletionRequestMessage } from "openai";
import { useRouter } from "next/navigation";
import axios from "axios";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const message: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, message];
      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setMessages((current) => [...current, message, response.data]);
      console.log(response);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      router.refresh();
    }
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
        <div className="mt-4 space-y-4">
          {isLoading && (
            <div className="flex items-center justify-center w-full p-8 ">
              <Loader />
            </div>
          )}
          {messages.length == 0 && !isLoading && (
            <Empty label="Jasper is processing your result" />
          )}
          <div className="flex flex-col-reverse space-y-4">
            {messages?.map((message) => (
              <div key={message.content}>{message.content}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
