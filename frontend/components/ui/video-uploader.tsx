import React from "react";
import { Card, CardFooter, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";

const VideoUploader = () => {
  return (
    <Card
      isBlurred
      className="w-[640px] border-none bg-background/60 dark:bg-default-100/50 p-8"
      shadow="sm"
    >
      <CardBody className="flex flex-col justify-center items-center gap-4">
        <Button className="w-fit py-8" color="primary" size="lg">
          <span className="text-xl ">Upload or drag file</span>
        </Button>
        <p>
          Max file size 64MB.{" "}
          <span className="text-primary cursor-pointer hover:underline">
            Upgrade
          </span>{" "}
          for more
        </p>
        <p className="text-gray-400 text-sm">
          By proceeding, you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Use.</span>
        </p>
      </CardBody>
    </Card>
  );
};

export default VideoUploader;
