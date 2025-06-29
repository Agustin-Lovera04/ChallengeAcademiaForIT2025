import { Router } from "express";
import { TaskController } from "../controller/task-controller.js";

export const router = Router()

router.get('/', TaskController.getTask)

router.get('/:id', TaskController.getTaskById)

router.post('/', TaskController.postTask)

router.put('/:id', TaskController.putTask)

router.delete('/:id', TaskController.deleteTask)