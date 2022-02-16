import FooterComponent from '../../shared/footer/footer.component';
import PortadaComponent from '../portada/portada.component';
import ProjectListComponent from '../project-list/project-list.component';
import './content.component.css';

interface Props {

}

const ContentComponent: React.FC<Props> = () => {

    return (
        <>
            
            <PortadaComponent />

            <ProjectListComponent />

            <FooterComponent/>

        </>
    );
}

export default ContentComponent;