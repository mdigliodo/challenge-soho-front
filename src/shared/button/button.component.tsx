import { CSSProperties } from 'react';

interface Props {
    text: string,
    styleComponent?: CSSProperties | undefined,
    link?: string,
    classComponent: string
}

const ButtonComponent: React.FC<Props> = ({ text, styleComponent, classComponent, link }) => {
    return (<>

        <a
            href={link}
            type='button'
            className={classComponent}
            style={styleComponent}>
            {text}
        </a>

    </>);
}

export default ButtonComponent;