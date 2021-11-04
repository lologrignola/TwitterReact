import AboutUsItem from "../components/AboutUsItem";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <div>
      <div className="mt-2 ms-2">Back</div>
      <div className="text-center pb-5 pt-5">
        <h1>Who we are</h1>
        <p className="fs-5 pt-2">
          We are a group of programmers specialized in Frontend & Backend web development
        </p>
      </div>

      <div className="row gx-0 text-center p-5">
        <AboutUsItem
          nombre="Lorenzo Grignola"
          git="https://github.com/lologrignola"
          linkedin="https://www.linkedin.com/in/lorenzo-grignola-a34028216/"
        />
        <AboutUsItem
          nombre="Felipe Cabrera"
          git="https://github.com/lologrignola"
          linkedin="https://www.linkedin.com/in/lorenzo-grignola-a34028216/"
        />
        <AboutUsItem
          nombre="Franco Bianchi"
          git="https://github.com/lologrignola"
          linkedin="https://www.linkedin.com/in/lorenzo-grignola-a34028216/"
        />
        <AboutUsItem
          nombre="Lucas Gonzalez"
          git="https://github.com/lologrignola"
          linkedin="https://www.linkedin.com/in/lorenzo-grignola-a34028216/"
        />
      </div>
    </div>
  );
}

export default AboutUs;
