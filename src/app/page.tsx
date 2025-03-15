"use client"; 
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm" onClick={() => alert("Hello")}>
        <span>Click me</span>
      </Button>
    </div>
  );
}
