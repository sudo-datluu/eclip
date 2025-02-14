"use client";

import { useState } from "react";
import { Card, CardFooter, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input"
import { pinata } from "@/lib/pinata";

const VideoUploader = () => {
    const [file, setFile] = useState<File>();
    const [url, setUrl] = useState("");
    const [uploading, setUploading] = useState(false);
    const uploadFile = async () => {
        if (!file) {
          alert("No file selected");
          return;
        }
    
        try {
          setUploading(true);
          const urlRequest = await fetch("/api/url"); // Fetches the temporary upload URL
          const urlResponse = await urlRequest.json(); // Parse response
          const upload = await pinata.upload
            .file(file)
            .url(urlResponse.url); // Upload the file with the signed URL
          const signRequest = await fetch("/api/sign", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( {cid: upload.cid} )
          })
          const signedResponse = await signRequest.json()
          setUrl(signedResponse)
          setUploading(false);
        } catch (e) {
          console.log(e);
          setUploading(false);
          alert("Trouble uploading file");
        }
      };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target?.files?.[0]);
    };
    return (
        <Card
            isBlurred
            className="w-[640px] border-none bg-background/60 dark:bg-default-100/50 p-8"
            shadow="sm"
        >
            <CardBody className="flex flex-col justify-center items-center gap-4">
                <Input onChange={handleChange} type="file" />
                <Button className="w-fit py-6" color="primary" size="md" disabled={uploading} onPress={uploadFile}>
                    <span className="text-xl ">{uploading ? "Uploading..." : "Upload"}</span>
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
