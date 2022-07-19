import React from "react";
import catLogo from "../images/cat.png"

function CatLogo() {
  return (
    <div>
      <div className="catLogoContainer">
        <img src={catLogo} className="catLogo" />
      </div>
    </div>
  );
}

export default CatLogo;
