import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    // Se a propriedade props.operation for passada, adicionar a classe operation, se não, deixar vazio. Segue a mesma lógia para as outras.
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
            // criando a função click(), para quando clicar no botão, passar o conteúdo do elemento
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}