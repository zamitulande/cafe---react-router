import React from 'react'
import { useLocation } from 'react-router-dom';
import Layout from './layout';
import PaginaNosotros from './paginas/paginanosotros';


const Nosotros = () => {

  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");
 
  return (
    <div>
       {splitLocation[1] === "nosotros" ?<Layout> <PaginaNosotros/>  </Layout>: <PaginaNosotros/>}
    
    </div>
  
    
  )
}

export default Nosotros