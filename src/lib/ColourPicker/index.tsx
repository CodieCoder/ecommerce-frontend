import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { memo, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const ColourPicker: React.FC<{
  onChangeHandler: (colour: string) => void;
  currentColor?: string;
}> = ({ onChangeHandler, currentColor }) => {
  const [color, setColor] = useColor(currentColor || "rgb(86 30 203)");
  const [isHideInput, setIsHideInput] = useState(true);

  const onChange = () => {
    const { r, g, b, a } = color.rgb;
    const rgbColour = `rgba(${r}, ${g}, ${b}, ${a})`;

    onChangeHandler(rgbColour);
  };

  return (
    <Card className="border-0">
      <CardHeader>
        <Switch
          checked={isHideInput}
          onClick={() => setIsHideInput((prev) => !prev)}
        />
        {isHideInput ? "Show" : "Hide"} settings
      </CardHeader>
      <CardContent>
        <ColorPicker
          hideInput={isHideInput}
          height={108}
          color={color}
          onChange={setColor}
        />
      </CardContent>
      <div className="flex justify-end border-t-2 p-2">
        <Button
          onClick={onChange}
          className="bg-sky-600 border text-white hover:bg-sky-500 font-extrabold"
        >
          Done
        </Button>
      </div>
    </Card>
  );
};

export default memo(ColourPicker);
