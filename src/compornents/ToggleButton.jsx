import React, {useState} from 'react';

const ToggleButton = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(prevState => !prevState)//true,falseを反転させて表示
    }

    return(
        <button onClick={toggle}>
            {open ? 'OPEN': 'CLOSE'}
        </button>
    )
}

export default ToggleButton;