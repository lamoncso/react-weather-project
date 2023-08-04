import React, { useState } from "react";
import Heart from "react-heart";

export default function HeaderHeart() {
  const [active, setActive] = useState(false);

  return (
    <div  style={{ width: "2rem", margin:"0 auto", scale:"1.5" }}>
      <Heart
        isActive={active}
        onClick={() => setActive(!active)}
        animationTrigger="both"
        inactiveColor="#ffffff"
        activeColor="#000000"
        style={{ marginTop: "1rem" }}
        animationDuration={0.1}
      />
    </div>
  );
}
