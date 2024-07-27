
import { LampDemo } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";

export default function Home() {
  const sampleWords = [
    { text: "Welcome", className: "text-blue-500" },
    { text: "to", className: "text-green-500" },
    { text: "the Future", className: "text-purple-500" },
    { text: "of Web Development", className: "text-orange-500" }
  ];

  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <LampDemo />
      
    </main>
  );
}
