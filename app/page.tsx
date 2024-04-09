import { ImageService } from "@/DynamicJson/static-image";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex gap-2 m-2">
        {ImageService.map((image) => (
          <div key={image.id} className="w-56 rounded-lg overflow-hidden">
            <Image
              src={image.url}
              alt={image.name}
              layout="responsive"
              width={100}
              style={{ height: "100% !important" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
