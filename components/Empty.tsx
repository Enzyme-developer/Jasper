import Image from "next/image";
import React from "react";

type emptyProp = {
  label: string;
};
const Empty = ({ label }: emptyProp) => {
  return (
    <div className="h-full p-20 flex items-center justify-center">
      {/* <div className="relative h-72 w-72">
        <Image src={} alt="empty" fill />
      </div> */}
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
