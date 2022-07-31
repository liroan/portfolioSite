import axios from "axios";

const instance = axios.create({
    baseURL: 'https://62e5161e20afdf238d772560.mockapi.io/portfolio/itemsw',
});

export const projectsAPI = {
    getProjects: (category: number) => {
        return instance.get("?category=" + category).then(res => res.data)
    }
}