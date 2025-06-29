import crypto from "crypto";

let tasks = [
  {
    id: 'Task Hardcode ID',
    title: 'Task Title Hardcode',
    description: 'Task Description Hardcode',
    completed: false,
    createdAt: 'Date Hardcode'
  },
  {
    id: 'Task Hardcode ID 2',
    title: 'Task Title Hardcode 2',
    description: 'Task Description Hardcode 2',
    completed: true,
    createdAt: 'Date Hardcode'
  }  
];

export class TaskController {
  static async getTask(req, res) {
    try {
      res.setHeader("Content-Type", "application/json");
      return res.status(200).json(tasks);
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      return res.status(500).json({ error: error.message });
    }
  }

  static async getTaskById(req, res) {
    try {
      let { id } = req.params;
      if (!id) {
        res.setHeader("Content-Type", "application/json");
        return res.status(404).json({ error: "Error en traslado de id" });
      }

      let task = tasks.find((t) => t.id === id);
      if (!task) {
        res.setHeader("Content-Type", "application/json");
        return res
          .status(404)
          .json({ error: "No existe Task con el id ingresado" });
      }

      res.setHeader("Content-Type", "application/json");
      return res.status(200).json(task);
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      return res.status(500).json({ error: error.message });
    }
  }

  static async postTask(req, res) {
    try {
      let { title, description } = req.body;
      if (!title || !description) {
        res.setHeader("Content-Type", "application/json");
        return res.status(404).json({
          error:
            "Debes enviar todos los campos requeridos: Titulo y descripción",
        });
      }


      let newTask = {
        id: crypto.randomUUID(),
        title,
        description,
        completed: false,
        createdAt: new Date().toLocaleString(),
      };

      tasks.push(newTask);

      res.setHeader("Content-Type", "application/json");
      return res.status(200).json('Task creada correctamente');
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      return res.status(500).json({ error: error.message });
    }
  }

  static async putTask(req, res) {
    try {
      let { id } = req.params;
      if (!id) {
        res.setHeader("Content-Type", "application/json");
        return res.status(500).json({ error: "Error en traslado de ID" });
      }
      let { title, description, completed } = req.body;
      if (!title && !description && !completed) {
        res.setHeader("Content-Type", "application/json");
        return res
          .status(404)
          .json({ error: "Debe enviar el campo que quieras editar" });
      }

      let updateTaskIndex = tasks.findIndex((t) => t.id === id);
      if (updateTaskIndex === -1) {
        res.setHeader("Content-Type", "application/json");
        return res
          .status(404)
          .json({ error: "No existe un Task con el id ingresado" });
      }

      if (title !== undefined) {
        tasks[updateTaskIndex].title = title;
      }
      if (description !== undefined) {
        tasks[updateTaskIndex].description = description;
      }
      if (completed !== undefined) {
        tasks[updateTaskIndex].completed = completed;
      }

      res.setHeader("Content-Type", "application/json");
      return res.status(200).json("Task actualizada" );
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteTask(req, res) {
    try {
      let { id } = req.params;
      if (!id) {
        res.setHeader("Content-Type", "application/json");
        return res.status(500).json({ error: "Error en traslado de ID" });
      }

      let deleteTaskIndex = tasks.findIndex((t) => t.id === id);
      if (deleteTaskIndex === -1) {
        res.setHeader("Content-Type", "application/json");
        return res
          .status(404)
          .json({ error: "No existe un Task con el id ingresado" });
      }

      tasks.splice(deleteTaskIndex, 1);

      res.setHeader("Content-Type", "application/json");
      return res.status(200).json({ ok: "Task eliminada correctamente" });
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      return res.status(500).json({ error: error.message });
    }
  }
}
