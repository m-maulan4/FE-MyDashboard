import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { CardSettingType } from "../settingType";

export default function CardSetting({
  title,
  aksibtn,
  content,
}: CardSettingType) {
  return (
    <Card>
      <CardContent className="flex flex-col space-y-3">
        <CardTitle className="flex justify-between items-center">
          {title}
          <div className="flex space-x-1.5">{aksibtn}</div>
        </CardTitle>
        {content}
      </CardContent>
    </Card>
  );
}
