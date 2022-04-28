import React from 'react'

const PaginaMenu = () => {
  return (
    <section className="nuestro-menu">
      <h2 className="heading-blanco"><span>Nuestro delicioso</span>Menú</h2>
      <div className="contenedor grid-menu">
        <section className="menu cafe">
            <h3 className="menus">Café</h3>
            <ul>
              <li>
                  <p>Café Latte <span>Café Espresso con leche caliente evaporada</span> </p>
                  <p className="precio">$5.000</p>
              </li>
              <li>
                  <p>Café Mocha <span>Espresso con crema batida</span> </p>
                  <p className="precio">$6.000</p>
              </li>
              <li>
                  <p>Café Americano <span>Café Negro</span> </p>
                  <p className="precio">$7.000</p>
              </li>
              <li>
                  <p>Capuccino<span>Espresso con una capa suave de espuma</span> </p>
                  <p className="precio">$7.500</p>
              </li>
              <li>
                  <p>Café Mocha Frio<span>Espresso, dulce con mocha y leche.</span> </p>
                  <p className="precio">$3.000</p>
              </li>
              <li>
                  <p>Mocha Frio Quemado<span>Espresso, hielo, con azúcar quemada y mantequilla.</span> </p>
                  <p className="precio">$3.500</p>
              </li>
              <li>
                  <p>Latte con Caramelo<span>Espresso, leche y caramelo.</span> </p>
                  <p className="precio">$5.900</p>
              </li>
          </ul>
        </section>
        <section className="menu comida">
            <h3 className="menus">Comida</h3>
            <ul>
              <li>
                  <p>Baguette de Pollo <span>Delicioso Baguette con pollo a la plancha</span> </p>
                  <p className="precio">$18.000</p>
              </li>
              <li>
                  <p>Baguette Pollo y Queso <span>Baguette combinado con Pollo y Queso Manchego</span> </p>
                  <p className="precio">$12.000</p>
              </li>
              <li>
                  <p>Baguette con Tocino<span>Baguette con especias y verduras, además de tocino</span> </p>
                  <p className="precio">$12.000</p>
              </li>
              <li>
                  <p>Baguette de Jamón<span>Delicioso Baguette con Jamón y Especias</span> </p>
                  <p className="precio">$22.000</p>
              </li>
              <li>
                  <p>Baguette con Jamón, Queso y Tocino<span>El especial de la casa</span> </p>
                  <p className="precio">$30.000</p>
              </li>
              <li>
                  <p>Sandwich de Pollo<span>Delicioso sandwich con Pollo y especies</span> </p>
                  <p className="precio">$8.000</p>
              </li>
              <li>
                  <p>Sandwich de Jamón y queso<span>Queso Amarillo con Jamón y Queso</span> </p>
                  <p className="precio">$10.000</p>
              </li>
          </ul>
          </section>
          </div>
        </section>
  )
}

export default PaginaMenu