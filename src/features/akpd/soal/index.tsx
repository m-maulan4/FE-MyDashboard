import HeaderAkpd from "../components/HeaderAkpd";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsBidang from "./TabsBidang";

export default function SoalPage() {
  return (
    <>
      <HeaderAkpd title="PROSES PENYUSUNAN BUTIR INSTRUMEN ANGKET KEBUTUHAN PESERTA DIDIK" />
      <div>
        <Tabs defaultValue="default">
          <TabsList>
            <p className="px-2 font-semibold">Kelas :</p>
            <TabsTrigger className="text-lg" value="10">
              Kelas 10
            </TabsTrigger>
            <TabsTrigger className="text-lg" value="11">
              Kelas 11
            </TabsTrigger>
            <TabsTrigger className="text-lg" value="12">
              Kelas 12
            </TabsTrigger>
          </TabsList>
          <TabsContent value="10">
            <TabsBidang />
          </TabsContent>
          <TabsContent value="11">
            <TabsBidang />
          </TabsContent>
          <TabsContent value="12">
            <TabsBidang />
          </TabsContent>
          <TabsContent value="default" className="capitalize">
            silakang pilih kelas terlebih dahulu
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
