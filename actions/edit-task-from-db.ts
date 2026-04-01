"use server";
import { prisma } from "@/utils/prisma";

type EditTaskProps = {
  taskId: number;
  newTask: string;
};

export const editTask = async ({ taskId, newTask }: EditTaskProps) => {
  try {
    if (!taskId || !newTask) return;

    const updatedTask = await prisma.tasks.update({
      where: {
        id: taskId,
      },
      data: {
        task: newTask,
      },
    });

    if (!updatedTask) return;

    return updatedTask;
  } catch (error) {
    throw error;
  }
};
