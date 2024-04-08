import Me from "@/public/me.jpg";
import Image from "next/image";

export default function Avatar() {
  return (
    <div className="rounded-full overflow-hidden border-4 border-accent hover:border-secondary shadow-lg hover:shadow-shadow transform hover:scale-105 transition duration-500 h-fit">
      <Image
        src={Me}
        alt="Portrait"
        height={150}
        width={150}
        className="rounded-full"
      />
    </div>
  );
}
