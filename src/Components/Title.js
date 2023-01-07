import React, { useState } from "react";

function Title() {
  const [data] = useState({
    fullName: "Emre ZAVAR",
    job: "SR. UI DEVELOPER",
  });
  return (
    <div className="flex flex-col items-center w-full mb-4">
      <h1 className="text-2xl font-bold">{data.fullName}</h1>
      <h2 className="text-xs">{data.job}</h2>
    </div>
  );
}
export default Title;
