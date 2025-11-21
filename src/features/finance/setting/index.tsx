import HeaderPage from "@/components/HeaderPage";
import CardSetting from "./components/CardSetting";
import DialogSetting from "./components/DialogSetting";
import { LKategoriKeluar, LKategoriMasuk } from "./kategori/LKategori";
import FKategori from "./kategori/FKategori";
import FDompet from "./dompet/FDompet";
import LDompet from "./dompet/LDompet";

export default function SettingPage() {
  return (
    <div className="flex flex-col space-y-4">
      <HeaderPage title="Setting" />
      <div className="grid grid-cols-3 gap-3">
        <div>
          <CardSetting
            title="Kategori Masuk"
            aksibtn={
              <DialogSetting
                iconOnly="y"
                title="Kategori Masuk"
                content={<FKategori type={1} />}
              />
            }
            content={<LKategoriMasuk />}
          />
        </div>
        <div>
          <CardSetting
            title="Kategori Keluar"
            aksibtn={
              <DialogSetting
                iconOnly="y"
                title="Kategori Keluar"
                content={<FKategori type={2} />}
              />
            }
            content={<LKategoriKeluar />}
          />
        </div>
        <div>
          <CardSetting
            title="Dompet"
            aksibtn={
              <DialogSetting
                iconOnly="y"
                title="Dompet"
                content={<FDompet />}
              />
            }
            content={<LDompet />}
          />
        </div>
      </div>
    </div>
  );
}
