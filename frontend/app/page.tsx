import VideoUploader from "@/components/ui/video-uploader";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full gap-2 flex flex-col">
          <h1 className="text-center text-4xl font-extrabold">Eclip</h1>
          <p className="text-muted-foreground text-center">Upload short videos within clicks</p>
        </div>
        <VideoUploader />
      </main>
    </div>
  );
}
