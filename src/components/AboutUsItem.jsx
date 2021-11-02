import React from "react";
import { motion } from "framer-motion";
function AboutUsItem({ nombre, git, linkedin }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
      <p className="fs-3">{nombre}</p>
      <div className="d-flex justify-content-center mt-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{
            cursor: "pointer",
            width: "fit-content",
          }}
          className="me-4"
        >
          <a href={git} style={{ color: "inherit", textDecoration: "inherit" }}>
            <i class=" fab fa-github fs-2"></i>{" "}
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{
            cursor: "pointer",
            width: "fit-content",
          }}
          className="ms-4"
        >
          <a href={linkedin}>
            <i class=" fab fa-linkedin-in fs-2" style={{ color: "#0a66c2" }}></i>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUsItem;
