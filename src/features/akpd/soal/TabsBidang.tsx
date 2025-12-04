import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InfoBidang from "./InfoBidang";

export default function TabsBidang() {
  return (
    <div className="p-4 border-2 rounded-lg">
      <Tabs defaultValue="default">
        <TabsList>
          <p className="px-2 font-semibold">Bidang :</p>
          <TabsTrigger value="pribadi">Pribadi</TabsTrigger>
          <TabsTrigger value="sosial">Sosial</TabsTrigger>
          <TabsTrigger value="belajar">Belajar</TabsTrigger>
          <TabsTrigger value="karir">Karir</TabsTrigger>
        </TabsList>
        <TabsContent value="pribadi">
          {[1, 2, 3].map((d) => (
            <InfoBidang />
          ))}
        </TabsContent>
        <TabsContent value="sosial">Sosial</TabsContent>
        <TabsContent value="belajar">Belajar</TabsContent>
        <TabsContent value="karir">Karir</TabsContent>
        <TabsContent value="default" className="capitalize">
          silakang pilih bidang terlebih dahulu
        </TabsContent>
      </Tabs>
    </div>
  );
}
