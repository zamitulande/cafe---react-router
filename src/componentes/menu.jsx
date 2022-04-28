import React from 'react'
import { useLocation } from 'react-router-dom';
import Layout from './layout';
import PaginaMenu from './paginas/paginamenu';

const Menu = () => {
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");
  return (
    <div>
        {splitLocation[1] === "menu" ?<Layout> <PaginaMenu/> </Layout>: <PaginaMenu/>}
    </div>
  )
}

export default Menu