import React, { Component } from 'react';
import "..//Categoria.css"

export default class Menu extends Component{
    constructor(props) {
        super(props)
        this.state = { visible: false };
        this.state = { visibleSubMenu: false };        
    }
    //La funcion hadleClick es para saber indicar lo que tiene que hacer cuando hagan click en el primer sub menu
    handleClick(event) {
        event.preventDefault()
        this.setState({
            visible: !this.state.visible //cambia de estado a false o true
        })
        // Verificacion para saber el estado del sub menu dentro del sub menu(para que no quede abierto al cerrar desde el primer sub menu)
        if (this.state.visible == true && this.state.visibleSubMenu == true){
            this.setState({                
                visibleSubMenu: this.state.visibleSubMenu = false
            }) }
        
    }
    //La funcion handleClickSubMenu es para saber indicar lo que tiene que hacer cuando hagan click en el sub menu dentro del sub menu
    handleClickSubMenu(event) {
        event.preventDefault()
        this.setState({
            visibleSubMenu: !this.state.visibleSubMenu
        })
    }
    render(){
        //Define "data" mediante el props para poder llamar a los parametros pasados en el App
        const { configColor, idFirstNivel, menuItems } = this.props.data;
        
        //Definen los elementos dentro de "menuItems" mediante el id de cada uno
        const elemento148 = menuItems.find(item => item.id === 148);
        const textoid148 = elemento148 ? elemento148.name : '';

        const elemento2 = menuItems.find(item => item.id === 2);
        const textoid2 = elemento2 ? elemento2.name : '';

        const elemento3 = menuItems.find(item => item.id === 3);
        const textoid3 = elemento3 ? elemento3.name : '';

        const elemento4 = menuItems.find(item => item.id === 4);
        const textoid4 = elemento4 ? elemento4.name : '';

        const elemento5 = menuItems.find(item => item.id === 5);
        const textoid5 = elemento5 ? elemento5.name : '';

        const elemento55 = menuItems.find(item => item.id === 55);
        const textoid55 = elemento55 ? elemento55.name : '';

        const elemento56 = menuItems.find(item => item.id === 56);
        const textoid56 = elemento56 ? elemento56.name : '';
    return(
        <div className="categoria">
        <svg width="100%" height={200} xmlns="http://www.w3.org/2000/svg">
            {/*Rectangulo y texto del boton id 148(primer boton)*/}
                <rect x="0" y="0" width={120} height={40} fill={this.props.data.configColor.background} stroke={"black"} strokeWidth="0.5" />
                    <text x="3" y="25" fill={this.props.data.configColor.itemColor}>{textoid148}</text>

            {/*Rectangulo,texto y flecha del boton id 2(boton con sub menu )*/}    
                <rect x="121" y="0" width={100} height={40} fill={this.state.visible ? this.props.data.configColor.itemActive : this.props.data.configColor.background} onClick={this.handleClick.bind(this)} stroke={"black"} strokeWidth="0.5" />
                    <polygon points='199,20 203.5,26 208,20' fill='black' onClick={this.handleClick.bind(this)} />
                    <text x="123" y="25" fill={this.props.data.configColor.itemColor} onClick={this.handleClick.bind(this)}>{textoid2}</text>

            {/*Rectangulo y texto del boton id 3(boton dentro del sub menu)*/}
                <rect x="121" y="41" width={110} height={30} className={this.state.visible ? "visible" : "no-visible"} fill={this.props.data.configColor.itemBackground} stroke={"black"} strokeWidth="0.5" />
                    <text x="123" y="60" className={this.state.visible ? "visible" : "no-visible"} fill={this.props.data.configColor.itemColor}>{textoid3}</text>

            {/*Rectangulo y texto del boton id 4(boton dentro del sub menu)*/}
                <rect x="121" y="71" width={110} height={30} className={this.state.visible ? "visible" : "no-visible"} fill={this.props.data.configColor.itemBackground} stroke={"black"} strokeWidth="0.5" />
                    <text x="123" y="90" className={this.state.visible ? "visible" : "no-visible"} fill={this.props.data.configColor.itemColor}>{textoid4}</text>

            {/*Rectangulo,texto y flecha del boton id 5(boton dentro del sub menu)(abre el sub sub menu)*/}   
                <rect x="121" y="101" width={110} height={30} className={this.state.visible ? "visible" : "no-visible"} fill={this.state.visibleSubMenu ? this.props.data.configColor.itemActive : this.props.data.configColor.itemBackground} onClick={this.handleClickSubMenu.bind(this)} stroke={"black"} strokeWidth="0.5" />
                <polygon points='215,113 221,116.5 215,121' className={this.state.visible ? "visible" : "no-visible"} onClick={this.handleClickSubMenu.bind(this)} />
                <text x="123" y="120" className={this.state.visible ? "visible" : "no-visible"} fill={this.props.data.configColor.itemColor} onClick={this.handleClickSubMenu.bind(this)}>{textoid5}</text> 

            {/*Rectangulo y texto del boton id 55(boton dentro del sub sub menu)*/}     
                <rect x="232" y="101" width={140} height={30} className={this.state.visibleSubMenu ? "visibleSubMenu" : "no-visibleSubMenu"} fill={this.props.data.configColor.subItemBackground} stroke={"black"} strokeWidth="0.5" />
                    <text x="234" y="120" className={this.state.visibleSubMenu ? "visibleSubMenu" : "no-visibleSubMenu"} fill={this.props.data.configColor.itemColor}>{textoid55}</text>

            {/*Rectangulo y texto del boton id 56(boton dentro del sub sub menu)*/}
                <rect x="232" y="132" width={140} height={30} className={this.state.visibleSubMenu ? "visibleSubMenu" : "no-visibleSubMenu"} fill={this.props.data.configColor.subItemBackground} stroke={"black"} strokeWidth="0.5" />
                    <text x="234" y="150" className={this.state.visibleSubMenu ? "visibleSubMenu" : "no-visibleSubMenu"} fill={this.props.data.configColor.itemColor}>{textoid56}</text>
                
        </svg>
        </div>
    );
}
}