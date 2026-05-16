import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "ASP.NET Core Backend Developer",
          "C# / SQL Server",
          "REST APIs & JWT Auth",
          "Clean Architecture",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
