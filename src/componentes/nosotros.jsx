import React from 'react'
import { useLocation } from 'react-router-dom';
import PaginaNosotros from './paginas/paginanosotros';

const Nosotros = () => {
  const location = useLocation();

  const {pathname} = location;

  const splitLocation = pathname.split("/");
  console.log(splitLocation)
  return (
    <>
    <PaginaNosotros/>

    </>
    
  )
}

export default Nosotros