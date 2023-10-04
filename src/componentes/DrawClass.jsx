import React from 'react';

export default function DrawClass({ data }){
    //Constante que permite recibir los componentes del App mediante "data"
    const { name, attributes, methods, borderColor, headColor, textColor, backgroundColorAttributes, backgroundColorMethods } = data;
    
    //Constantes que definen la ubicacion en el eje "y" de los componentes svg que forman la figura de la clase
    const tamañoBloqueAtributo= 35 + attributes.length *21
    const lugarLinea = tamañoBloqueAtributo + 50
    const tamañoBloqueMetodo = methods.length * 25
    const tamañoSvg = tamañoBloqueMetodo + lugarLinea + 300
    
    //Funcion que permite encontrar la cadena mas larga(con mas letras)
    function encontrarCadenaMasLarga(textos) {
        let longitudMasLarga = 0;

        textos.forEach((texto) => {
            const longitudTexto = texto.length;
            if (longitudTexto > longitudMasLarga) {
                longitudMasLarga = longitudTexto;
            }
        });
        return longitudMasLarga;
    }

    //Usando la funcion para encontrar la cadena mas larga de los atributos y de los metodos
    const tamañoCadenaAtribute = encontrarCadenaMasLarga(attributes)
    const tamañoCadenametodo = encontrarCadenaMasLarga(methods)

    /*Comparando la cadena mas larga de los atributos, de los metodos y del nombre de la clase para definir
    el ancho del recuadro de la clase */
    let anchoRectangulos = 0
    if (tamañoCadenaAtribute > tamañoCadenametodo) {
        anchoRectangulos = tamañoCadenaAtribute * 8;
    } else if (tamañoCadenaAtribute < tamañoCadenametodo) {
        anchoRectangulos = tamañoCadenametodo * 8;
    }    
    if (anchoRectangulos < name.length) {
        anchoRectangulos = name.length * 8;}
             
    return ( 
              
        <svg width="100%" height={tamañoSvg}  xmlns="http://www.w3.org/2000/svg">                            
            {/* Rectángulo para el contorno de atributos y nombre de la clase */}                  
            <rect x="50" y="50" width={anchoRectangulos} height={tamañoBloqueAtributo } fill={backgroundColorAttributes} stroke={borderColor} strokeWidth="2" />
            
            {/*recuadro de los metodos */}
            <rect x="50" y={lugarLinea} width={anchoRectangulos} height={tamañoBloqueMetodo} fill={backgroundColorMethods} stroke={borderColor} strokeWidth="2" />
        
            {/* Linea divisoria entre los atributos y los metodos */}
            <line x1="50" y1={lugarLinea} x2={50 + anchoRectangulos} y2={lugarLinea} stroke="black" strokeWidth="3" />
            
            {/* Texto de atributos */}
            {attributes.map((attribute, index) => (
                <text key={index} x="60" y={100 + index * 20} fill={textColor}>
                    {attribute}
                </text>
            ))}

            {/* Texto de métodos */}
            {methods.map((method, index) => (                                    
                <text key={index} x="60" y={lugarLinea + 18 + index * 25} fill={textColor}>
                    {method}
                </text>                    
            ))}            
            
            {/* Rectángulo para el título de la clase */}
            <rect x="50" y="50" width={anchoRectangulos} height="30" fill={headColor} stroke={borderColor} strokeWidth="2" />            
            
            {/* Texto del nombre de la clase */}
            <text x="60" y="70" fill={textColor} fontWeight="bold" >
                {data.name}
            </text>
                                              
        </svg>       
    );

};
