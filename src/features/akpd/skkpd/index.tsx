import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaderAkpd from "../components/HeaderAkpd";
import TabsSKKPD from "./TabsSKKPD";

export default function SKKPDPage() {
  return (
    <>
      <HeaderAkpd title="Standar Kompetensi Kemandirian Peserta Didik" />
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
          <TabsSKKPD />
        </TabsContent>
        <TabsContent value="11">
          <TabsSKKPD />
        </TabsContent>
        <TabsContent value="12">
          <TabsSKKPD />
        </TabsContent>
        <TabsContent value="default" className="capitalize">
          silakang pilih kelas terlebih dahulu
        </TabsContent>
      </Tabs>
    </>
  );
}
