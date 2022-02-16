import ButtonComponent from '../../shared/button/button.component';
import NavbarComponent from '../../shared/navbar/navbar.component';
import './portada.component.css';

interface Props {

}

const PortadaComponent: React.FC<Props> = () => {

    return (
        <>
            <div id='portada' className="row">
                <NavbarComponent />


                <div id='title-portada'>

                    <h1>Nos especializamos en </h1>
                    <h1 style={{ color: '#02B300' }}>interfaces digitales que los usuarios aman</h1>

                    <ButtonComponent
                        text='HABLEMOS DE TU PROYECTO'
                        styleComponent={{
                            color: '#FFF',
                            background: '#02B300',
                            minWidth: '30rem',
                            minHeight: '3.5rem',
                            fontSize: 'x-large',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: '200',
                            marginTop: '2rem',
                            borderRadius: '10px'
                        }}
                        classComponent='btn'
                    />

                </div>


            </div>
        </>
    );
}

export default PortadaComponent;