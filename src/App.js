import './App.css';
import React, { Component } from 'react';
import DrawClass from './componentes/DrawClass';
import Menu from './componentes/Menu';

const CLASS_UML = {
  name: 'Person',
  attributes: ['+name:str', '+phoneNumber:str', '+emailAddress:str'],
  methods: ['+purchaseParkingPass()',],
  borderColor: '#2ECC71 ',
  headColor: '#D5F5E3',
  textColor: '#050609',
  backgroundColorAttributes:'white',
  backgroundColorMethods:'white',
};

const configMenu = {
  configColor: {
    background: '#9C66C0', // Color de Fondo General de la botonera
    itemBackground: '#9b7ede',// Color de Fondo de los subMenús
    subItemBackground: '#7e78d2',// Color de fondo de los subsubMenús
    itemColor: '#050609', // Color del texto de cada item del menú
    itemActive: '#01FFE6', // Color cuando hace click y se abre un
    
  },
  idFirstNivel: 150,
  menuItems: [
    { name: 'Another Action', isFolder: false, id: 148, idPadre: 150 },
    { name: 'sub menu', isFolder: true, id: 2, idPadre: 150 },
    { name: 'Action', isFolder: false, id: 3, idPadre: 2 },
    { name: 'Another action', isFolder: false, id: 4, idPadre: 2 },
    { name: 'sub menu', isFolder: true, id: 5, idPadre: 2 },
    { name: 'Another action', isFolder: false, id: 55, idPadre: 5 },
    { name: 'something else here', isFolder: false, id: 56, idPadre: 5 },
  ],
};

class App extends Component {
  render(){
  return (
    <div className="App" >
      <Menu data={configMenu}/>

      <DrawClass data={CLASS_UML} />   
            
    </div>
  );
}
}

export default App;
