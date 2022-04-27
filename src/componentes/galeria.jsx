import React from 'react'
import Layout from './layout'
import { useLocation } from 'react-router-dom'
import Galerias from './galeria/galerias';

const Galeria = () => {
  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");
  console.log(splitLocation)
  return (   
   <div>
      {splitLocation[1] === "galeria" ?<Layout> <Galerias/> </Layout>: <Galerias/>}
   </div>
  )
}
export default Galeria