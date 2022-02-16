import React, { useEffect, useState } from 'react';
import './project-list.component.css';
import projectService from '../../services/project.service';
import ProjectComponent from './components/project.component';

interface Props {

}

const ProjectListComponent: React.FC<Props> = () => {

    /**
     * Definimos useState para guardar en un estado los
     * proyectos que vienen del servicio
     *  */

    const [projectList, setProjectList] = useState<any>([]);

    const getProjects = () => {
        projectService.getProjects().then(resp => {
            setProjectList(resp);
        }, err => {
            console.log(err);

        })
    }


    /**
     * Definimos useEffect para ejecutar funciones cada
     * vez se detecte un cambio en el componente
     *  */
    useEffect(() => {
        getProjects();

    }, [])

    return (
        <>
            <div className='row' id='title-project'>
                <h1>Proyectos destacados</h1>
                <hr id='hr' />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet aspernatur cumque doloribus illum quo non vel, consequatur mollitia odio,
                    natus quisquam iure ipsa molestiae nesciunt fugiat quae aut labore atque!
                </p>
            </div>

            <div className='row'>
                {
                    // Validamos que exista al menos un proyecto
                    projectList.length ?
                        projectList.map((project: any, index: number) =>
                        (<ProjectComponent
                            key={index}
                            index={index}
                            logo={project.logo}
                            img={project.img}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            primaryColor={project.primaryColor}
                            secondaryColor={project.secondaryColor}
                            fontColor={project.fontColor}
                        />))
                        :
                        (<div className="row d-flex justify-content-center mt-3 mb-5">
                            <div className="col-6 d-flex justify-content-center">
                                <h1 id='none-project'>Ningun proyecto para mostrar</h1>
                            </div>
                        </div>)
                }

            </div>

        </>
    );
}

export default ProjectListComponent;