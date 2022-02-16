import axios from "axios";
import GLOBAL from "../assets/env/global";

class ProjectService {

    private url = GLOBAL.api_url;

    getProjects = async () => {
        const response = await axios
            .get<any>(`${this.url}/projects`)
            .then((resp) => {
                return resp.data ? resp.data : null;
            })
            .catch((err) => {
                return err
            });
        return response;

        // let project = [
        //     {
        //         logo: 'https://www.siconsultoresperu.com/wp-content/uploads/2018/01/Logo-derco-1.png',
        //         img: 'https://suzukiderco.vteximg.com.br/arquivos/ids/155826-520-292/Suzuki-Swift-HB-H%C2%A1brido-Rojo.png?v=637553495540000000',
        //         title: 'Sitio publico y privado',
        //         description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis minus fugit nisi molestias id! A dicta officiis quas nostrum perspiciatis consequatur, in doloribus, inventore blanditiis doloremque architecto, explicabo laboriosam.',
        //         tags: ['usabilidad', 'ui', 'ux'],
        //         primaryColor: '#223B82',
        //         secondaryColor: '#FFFFFF',
        //         fontColor: '#FFFFFF'
        //     },
        //     {
        //         logo: 'https://www.siconsultoresperu.com/wp-content/uploads/2018/01/Logo-derco-1.png',
        //         img: 'https://suzukiderco.vteximg.com.br/arquivos/ids/155826-520-292/Suzuki-Swift-HB-H%C2%A1brido-Rojo.png?v=637553495540000000',
        //         title: 'Sitio web 2017',
        //         description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis minus fugit nisi molestias id! A dicta officiis quas nostrum perspiciatis consequatur, in doloribus, inventore blanditiis doloremque architecto, explicabo laboriosam.',
        //         tags: ['usabilidad 2', 'ui 2', 'ux 2'],
        //         primaryColor: '#C92C3A',
        //         secondaryColor: '#FFFFFF',
        //         fontColor: '#FFFFFF'
        //     },
        //     {
        //         logo: 'https://www.siconsultoresperu.com/wp-content/uploads/2018/01/Logo-derco-1.png',
        //         img: 'https://suzukiderco.vteximg.com.br/arquivos/ids/155826-520-292/Suzuki-Swift-HB-H%C2%A1brido-Rojo.png?v=637553495540000000',
        //         title: 'TV App',
        //         description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis minus fugit nisi molestias id! A dicta officiis quas nostrum perspiciatis consequatur, in doloribus, inventore blanditiis doloremque architecto, explicabo laboriosam.',
        //         tags: ['usabilidad 2', 'ui 2', 'ux 2'],
        //         primaryColor: '#FFFFFF',
        //         secondaryColor: '#C92C3A',
        //         fontColor: '#000'
        //     }
        // ];
        // return project;

    };

}

export default new ProjectService();