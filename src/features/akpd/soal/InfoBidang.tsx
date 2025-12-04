import { Button } from "@/components/ui/button";
import InfoSoal from "./InfoSoal";
export default function InfoBidang() {
  return (
    <div className="flex flex-col space-y-2 p-2 border-b-8">
      <h4>
        <span className="font-normal">SKKPD :</span> Landasan Hidup Religius
      </h4>
      <div className="flex flex-wrap">
        <h5 className="font-normal w-full">Tataran/Internalisasi Tujuan :</h5>
        <div className="flex flex-wrap w-full">
          <div className="w-1/2">
            <p className="font-semibold">Pengenalan :</p>
            <p>test</p>
          </div>
          <div className="w-1/2">
            <p className="font-semibold">Akomodasi :</p>
            <p>test</p>
          </div>
          <div className="w-1/2">
            <p className="font-semibold">Tindakan :</p>
            <p>test</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h5>Daftar Soal/Angket :</h5>
        <Button className="btn-green">Tambah Soal</Button>
      </div>
      <InfoSoal />
      <InfoSoal />
    </div>
  );
}
