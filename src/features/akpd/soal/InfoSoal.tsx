import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight, Pen, Trash } from "lucide-react";
import { useState, type ReactNode } from "react";

export default function InfoSoal() {
  const [isOpen, setIsOpen] = useState<boolean>();
  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={toggleCollapse}
      className="p-2 border-2 rounded-lg"
    >
      <div className="flex justify-between">
        <CollapsibleTrigger asChild>
          <Button className="btn-green w-24">
            Soal 1
            <ChevronRight className={`duration-200 ${isOpen && "rotate-90"}`} />
          </Button>
        </CollapsibleTrigger>
        <div className="flex space-x-1.5">
          <Button className="btn-red">
            <Trash />
          </Button>
          <Button className="btn-green">
            <Pen />
          </Button>
        </div>
      </div>
      <CollapsibleContent className="py-2">
        <p className="font-semibold">Soal/Butir Angket :</p>
        <p className="text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          alias delectus quisquam in excepturi. Iure.
        </p>
        <div className="flex flex-col w-full px-6 mt-2">
          <p className="font-semibold">- rumusan masalah :</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            in.
          </p>
          <p className="font-semibold">- pengembangan topil/materi :</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            in.
          </p>
          <p className="font-semibold">- tujuan layanan :</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            in.
          </p>
          <p className="font-semibold">- komponen layanan :</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            in.
          </p>
          <p className="font-semibold">- strategi layanan :</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            in. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eveniet assumenda odio saepe modi illum dolorem nam esse
            necessitatibus ex. Earum!
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
