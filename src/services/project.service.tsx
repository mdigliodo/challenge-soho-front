import axios from "axios";
import GLOBAL from "../assets/env/global";
import { Project } from "../models/project.model";

class ProjectService {

    private url = GLOBAL.api_url;

    getProjects = async () => {
        const projects = await axios
            .get<Project[]>(`${this.url}/projects`)
            .then((resp) => {
                if (!resp.data) return null;

                let projects = resp.data;
                projects.map((p: Project) => {
                    if (p.tags) {
                        return p.tags = p.tags.split(',')
                    }
                    return null;
                })

                return projects;
            })
            .catch((err) => {
                return err
            });
            
        return projects;
    };

}

export default new ProjectService();