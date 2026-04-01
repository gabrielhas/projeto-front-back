import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Pencil } from "lucide-react";
import { Tasks } from "@/src/generated/prisma/client";
import { useState } from "react";
import { toast } from "sonner";
import { editTask } from "@/actions/edit-task-from-db";
import { DialogClose } from "@/components/ui/dialog";

type TaskProps = {
  task: Tasks;
  handledGetTasks: () => void;
};

export default function EditTask({ task, handledGetTasks }: TaskProps) {
  const [editedTask, setEditedTask] = useState(task.task);

  const handleEditTask = async () => {
    try {
      if (editedTask !== task.task) {
        toast.success("Tarefa atualizada com sucesso!", {
          position: "top-center",
        });
      } else {
        toast.error("As informações não foram alteradas.", {
          position: "top-center",
        });
        return;
      }

      await editTask({ taskId: task.id, newTask: editedTask });

      handledGetTasks();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Pencil className="cursor-pointer" size={16} />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Tarefa</DialogTitle>
        </DialogHeader>
        <div className="flex gap-2">
          <Input
            placeholder="Escreva a tarefa"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <DialogClose>
            <Button className="cursor-pointer" onClick={handleEditTask}>
              Editar
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
