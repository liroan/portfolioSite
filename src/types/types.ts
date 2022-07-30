export interface IProject {
    id: string,
    img: string,
    name: string,
    description: string,
    ref: string,
    category: string
}
export interface IProjects {
    [key: number]: IProject[]
}
export interface IProjectsState {
    projects: IProjects;
    isLoading: boolean;
    error: string;
}

export interface IAction<Type> {
    type: string,
    payload?: Type;
}