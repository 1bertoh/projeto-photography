import React from "react";

type Props = {
  shadow_color: string;
  button_color: string;
  callback: () => void;
};

const RoundedShadowButton = (props: Props) => {
  const { button_color, shadow_color, callback } = props;

  return (
    <div
      className="h-8 w-8 rounded-full cursor-pointer"
      onClick={callback}
      role="button" // Adiciona um papel semântico
      tabIndex={0} // Torna o elemento focável
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
        }
      }}
    >
      <div
        className={`w-full h-1/2 rounded-t-full`}
        style={{ backgroundColor: button_color }}
      />
      <div
        className={`w-full h-1/2 rounded-b-full`}
        style={{ backgroundColor: shadow_color }}
      />
    </div>
  );
};

export default RoundedShadowButton;
