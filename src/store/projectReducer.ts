import {IAction, IProject, IProjects, IProjectsState} from "../types/types";
import {projectsAPI} from "../dal/API";
import {Dispatch} from "redux";
import {AnyAction} from "redux";

const SET_PROJECTS = "SET_PROJECTS";
const SET_ERROR = "SET_ERROR";
const SET_LOADING = "SET_LOADING";

const initialState: IProjectsState = {
    projects: {},
    isLoading: false,
    error: "",
}
type ActionTypes = { category: any, projects: IProject[] } | { error: string }
export const projectReducer = (state = initialState, action: IAction<any>) => {
    switch (action.type) {
        case SET_PROJECTS: {
            return {
                ...state,
                projects: { ...state.projects, [action.payload?.category]: action.payload?.projects },
                error: ""
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        default: return state;
    }
}

const getProjectsSuccess = (category: number, projects: IProject[]) => ({ type: SET_PROJECTS, payload: {category, projects} })
const setError = (error: string) => ({ type: SET_ERROR, payload: error })
const setLoading = (loading: boolean) => ({ type: SET_LOADING, payload: loading })
export const getProjects = (category: number) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setLoading(true));
    try {
        const res = await projectsAPI.getProjects(category);
        dispatch(getProjectsSuccess(category, res));
    } catch (e: any) {
        dispatch(setError("Не удалось загрузить проекты"))
    } finally {
        dispatch(setLoading(false));
    }
}