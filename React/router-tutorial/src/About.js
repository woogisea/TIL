import React from "react";
import { useSearchParams } from "react-router-dom";

function About() {
  const [query] = useSearchParams();
  const detail = query.get("detail") === "true";

  return (
    <div>
      <h2>소개</h2>
      {detail && <div>추가적인 정보</div>}
    </div>
  );
}

export default About;
