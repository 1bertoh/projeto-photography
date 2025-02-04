import React from "react";

type Props = {
  shadow_color: string;
  button_color: string;
  callback: () => void;
};

const RoundedShadowButton = (props: Props) => {
  const { button_color, shadow_color, callback } = props;
  return (
    <div onClick={callback} className="h-8 w-8 rounded-full cursor-pointer">
      <div
        style={{ backgroundColor: button_color }}
        className={`w-full h-1/2 rounded-t-full`}
      ></div>
      <div
        style={{ backgroundColor: shadow_color }}
        className={`w-full h-1/2 rounded-b-full`}
      ></div>
    </div>
  );
};

export default RoundedShadowButton;
