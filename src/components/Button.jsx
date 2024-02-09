/* eslint-disable react/prop-types */
import "./Button.css";

function Button({id, text, action}) {
    // ativando botão
    const handleAction = (e) => {
        action(e);
    }

    return (
        <button id={id} onClick={handleAction}>{text}</button>
    )
}

export default Button;