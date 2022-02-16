import LinkComponent from '../link/link.component';
import './footer.component.css';

interface Props {

}

const FooterComponent: React.FC<Props> = () => {

    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        background: 'black'
    };

    return (
        <>
            <footer >
                <div style={style}>
                    <div className='col col-center' >
                        <h6 className='d-flex'>&copy; 2017 &nbsp; <p>SOHO Internet + humana</p></h6>
                    </div>
                    <div className='col col-center' >
                        <LinkComponent
                            text='Visitanos'
                            styleComponent={{ color: '#00BE0F', textDecoration: 'none' }}
                        />
                        <LinkComponent
                            text='Llamanos'
                            styleComponent={{ color: '#00BE0F', textDecoration: 'none' }}
                        />
                        <LinkComponent
                            text='Escribenos'
                            styleComponent={{ color: '#00BE0F', textDecoration: 'none' }}
                        />
                    </div>
                    <div className='col col-center' >
                        <LinkComponent
                            text='Facebook'
                            styleComponent={{ color: '#4151AE', textDecoration: 'none' }}
                        />
                        <LinkComponent
                            text='Twitter'
                            styleComponent={{ color: '#0ACEFA', textDecoration: 'none' }}
                        />
                        <LinkComponent
                            text='Linkedin'
                            styleComponent={{ color: '#4A90E2', textDecoration: 'none' }}
                        />
                        <LinkComponent
                            text='Youtube'
                            styleComponent={{ color: '#EB6F6F', textDecoration: 'none' }}
                        />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterComponent;