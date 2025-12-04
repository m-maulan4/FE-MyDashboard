import { Card } from "@/components/ui/card";

export default function InfoBidang() {
  return (
    <Card className="flex flex-col gap-3 p-2 border-2 rounded-lg">
      <h4>
        <span className="font-normal">SKKPD :</span> Landasan Hidup Religius
      </h4>
      <div className="flex flex-wrap">
        <h5 className="">Tataran/Internalisasi Tujuan</h5>
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
    </Card>
  );
}
