const TaskModel = require("../models/task.model");
const mongoose = require("mongoose");
const {
    notFoundError,
    objectIdCastError,
} = require("../errors/mongodb.errors");
const { notAllowedFieldsToUptadeError } = require("../errors/general.errors");

class TaskController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async getAll() {
        try {
            const tasks = await TaskModel.find({});
            this.res.status(200).send(tasks);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    async getById() {
        try {
            const taskId = this.req.params.id;
            const task = await TaskModel.findById(taskId);

            if (!task) {
                return notFoundError(this.res);
            }

            return this.res.status(200).send(task);
        } catch (error) {
            if (error instanceof mongoose.Error.CastError) {
                return objectIdCastError(this.res);
            }
            this.res.status(500).send(error.message);
        }
    }

    async create() {
        try {
            const newTask = new TaskModel(this.req.body);

            await newTask.save();

            this.res.status(201).send(newTask);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    async update() {
        try {
            const taskId = this.req.params.id;
            const taskData = this.req.body;

            if (!taskData || typeof taskData !== "object") {
                return notFoundError(this.res);
            }

            const taskToUpdate = await TaskModel.findById(taskId);
            if (!taskToUpdate) {
                return notFoundError(this.res);
            }

            const allowedUpdates = ["isCompleted"];

            const requestUpdates = Object.keys(taskData);

            for (this.update of requestUpdates) {
                if (allowedUpdates.includes(this.update)) {
                    taskToUpdate[this.update] = taskData[this.update];
                } else {
                    return notAllowedFieldsToUptadeError(this.res);
                }
            }

            await taskToUpdate.save();
            return this.res.status(200).send(taskToUpdate);
        } catch (error) {
            if (error instanceof mongoose.Error.CastError) {
                return objectIdCastError(this.res);
            }
            return this.res.status(500).send(error.message);
        }
    }

    async delete() {
        try {
            const taskId = this.req.params.id;

            const taskToDelete = await TaskModel.findById(taskId);

            if (!taskToDelete) {
                return notFoundError(this.res);
            }

            const deletedTask = await TaskModel.findByIdAndDelete(taskId);

            this.res.status(200).send(deletedTask);
        } catch (error) {
            if (error instanceof mongoose.Error.CastError) {
                return objectIdCastError(this.res);
            }
            this.res.status(500).send(error.message);
        }
    }
}

module.exports = TaskController;
