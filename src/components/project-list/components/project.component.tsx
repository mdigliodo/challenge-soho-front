// importamos componentes necesarios
import ButtonComponent from '../../../shared/button/button.component';
import LinkComponent from '../../../shared/link/link.component';
// importamos iconos necesarios de Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons'


interface Props {
    index: number,
    logo: string,
    img: string,
    title: string,
    description: string,
    tags: string[],
    primaryColor: string,
    secondaryColor: string,
    fontColor: string

}

const ProjectComponent: React.FC<Props> = ({ index, logo, img, title, description, tags, primaryColor, secondaryColor, fontColor }) => {
    // Añadimos icono para los tags
    library.add(faTag)
    return (
        <>
            {/* 
                Validamos si el index es par o inpar para saber
                si la imagen va a la izquierda o a la derecha
            */}
            {(index % 2 === 0) ?
                (
                    <div className="row section-project" style={{ background: primaryColor }}>
                        <div className="col-6" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <img style={{ maxWidth: '55rem', position: 'absolute' }} src={img} alt="Imagen de proyecto" />
                        </div>
                        <div className="col-6" style={{ padding: '4rem' }}>
                            <img style={{ maxWidth: '22rem' }} src={logo} alt="Logo de proyecto" />
                            <hr style={{ color: secondaryColor }} id='hr' />
                            <h1 style={{ color: fontColor }}>{title}</h1>
                            <p style={{ color: fontColor, maxWidth: '35rem' }}>{description}</p>
                            <div className="col mt-3 d-flex align-items-center">
                                <FontAwesomeIcon icon="tag" style={{ color: fontColor, opacity: 0.5 }} size="lg" />
                                <small>{
                                    tags.map((tag: any, index: number) => (
                                        <LinkComponent
                                            key={index}
                                            styleComponent={{ color: fontColor, opacity: 0.75 }}
                                            text={tag}
                                        />
                                    ))
                                }</small>
                            </div>
                            <div className="col mt-3">
                                <ButtonComponent
                                    text='Ver detalles'
                                    styleComponent={{
                                        color: primaryColor,
                                        fontSize: 'x-large',
                                        fontWeight: '500',
                                        backgroundColor: secondaryColor,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: '3.45rem',
                                        maxWidth: '14rem',
                                        borderRadius: '8px'
                                    }}
                                    link="/"
                                    classComponent='btn btn-secondary'
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row section-project" style={{ background: primaryColor }}>
                        <div className="col-6" style={{ padding: '4rem', paddingLeft: '8rem' }}>
                            <img src={logo} alt="Logo de proyecto" />
                            <hr style={{ color: secondaryColor }} id='hr' />
                            <h1 style={{ color: fontColor }}>{title}</h1>
                            <p style={{ color: fontColor, maxWidth: '35rem' }}>{description}</p>
                            <div className="col mt-3 d-flex align-items-center">
                                <FontAwesomeIcon icon="tag" style={{ opacity: 0.75 }} size="lg" />
                                <small>{
                                    tags.map((tag: any, index: number) => (
                                        <LinkComponent
                                            key={index}
                                            styleComponent={{ color: fontColor, opacity: 0.75 }}
                                            text={tag}
                                        />
                                    ))
                                }</small>
                            </div>
                            <div className="col mt-3">
                                <ButtonComponent
                                    text='Ver detalles'
                                    styleComponent={{
                                        color: primaryColor,
                                        fontSize: 'x-large',
                                        fontWeight: 'bold',
                                        backgroundColor: secondaryColor,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: '3.45rem',
                                        maxWidth: '14rem',
                                        borderRadius: '11px'
                                    }}
                                    link="/"
                                    classComponent='btn btn-secondary'
                                />
                            </div>
                        </div>
                        <div className="col-6" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <img style={{ maxWidth: '55rem', position: 'absolute' }} src={img} alt="Imagen de proyecto" />
                        </div>
                    </div>
                )}
        </>
    );
}

export default ProjectComponent;