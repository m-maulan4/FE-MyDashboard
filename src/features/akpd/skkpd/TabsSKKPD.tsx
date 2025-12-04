import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InfoBidang from "./InfoBidang";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function TabsSKKPD() {
  return (
    <Tabs defaultValue="default" className="p-4 border-2 rounded-lg">
      <div className="flex justify-between items-center">
        <TabsList>
          <p className="px-2 font-semibold">Bidang :</p>
          <TabsTrigger value="pribadi">Pribadi</TabsTrigger>
          <TabsTrigger value="sosial">Sosial</TabsTrigger>
          <TabsTrigger value="belajar">Belajar</TabsTrigger>
          <TabsTrigger value="karir">Karir</TabsTrigger>
        </TabsList>
        <Button className="btn-green">
          <Plus />
          SKKPD
        </Button>
      </div>
      <TabsContent className="space-y-2" value="pribadi">
        <InfoBidang />
        <InfoBidang />
      </TabsContent>
      <TabsContent className="space-y-2" value="sosial">
        Sosial
      </TabsContent>
      <TabsContent className="space-y-2" value="belajar">
        Belajar
      </TabsContent>
      <TabsContent className="space-y-2" value="karir">
        Karir
      </TabsContent>
      <TabsContent className="space-y-2" value="default" className="capitalize">
        silakang pilih bidang terlebih dahulu
      </TabsContent>
    </Tabs>
  );
}
