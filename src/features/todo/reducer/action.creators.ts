import { createAction } from '@reduxjs/toolkit';
import { Task } from '../models/task';
import { actionTypes } from './action.types';

export const loadActionCreate = createAction<Array<Task>>(actionTypes.load); //x es un nuevo objeto de tipo actioncreator que devuelve un objeto
//creact que le demosun actiontype sctring para que el cree el tipo de accion que va a utilizar
//reciben como parametro el tipo correspondiente al string que van a utilizar
export const addActionCreate = createAction<Task>(actionTypes.add); //array no porque va a añadir UNA tarea, y en lo siguiente igual
export const updateActionCreate = createAction<Task>(actionTypes.update);
export const deleteActionCreate = createAction<Task>(actionTypes.delete);
