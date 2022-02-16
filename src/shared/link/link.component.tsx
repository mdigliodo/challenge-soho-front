import { CSSProperties } from 'react';
import './link.component.css';

interface Props {
    styleComponent: CSSProperties | undefined,
    text: string
}

const LinkComponent: React.FC<Props> = ({ styleComponent, text }) => {    

    return (
        <>
            <a className='m-3' style={styleComponent}  href="/">{text}</a>
        </>
    );
}

export default LinkComponent;