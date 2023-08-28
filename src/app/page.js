import Format from "../../layout/format";

// components
import BookAdd from "../../components/bookAdd";
import Planning from "../../components/planning";
import Section1 from "../../components/section1";
import Section2 from "../../components/section2";
import Section3 from "../../components/section3";
import Section4 from "../../components/section4";

export default function Home() {
  return (
    <Format>
      <Section1 />
      <Section2 />
      <Section3 />
      <Planning />
      <Section4 />
      <BookAdd />
    </Format>
  );
}
