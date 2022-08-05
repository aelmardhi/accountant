import PenSvg from './pen-solid.svg';
import TrashSvg from './trash-solid.svg';
import PlusSvg from './plus-solid.svg';

export function PenIcon(props){
    return(
        <img src={PenSvg} alt="Pen icon"></img>
    )
}

export function TrashIcon(props){
    return(
        <img src={TrashSvg} alt="Trash icon"></img>
    )
}

export function PlusIcon(props){
    return(
        <img src={PlusSvg} alt="Plus icon"></img>
    )
}