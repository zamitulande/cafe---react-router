import React from "react";
import Galeria from "./galeria";
import Layout from "./layout";
import Nosotros from "./nosotros";
import Menu from "./menu";
import Testimonial from "./testimonial";

const Inicio = () => {
  return (
    <>
      <Layout>
        <Nosotros />
        <Galeria />
        <Menu />
        <Testimonial />
      </Layout>
    </>
  );
};

export default Inicio;
