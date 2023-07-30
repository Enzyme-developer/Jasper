import Heading from "@/components/reusables/Heading";
import { MessageSquare } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Have intuitive convo with Jasper"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default page;
