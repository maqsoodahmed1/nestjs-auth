import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController ,CheckController} from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/todo.schema';

@Module({
  providers: [TodoService],
  controllers: [TodoController,CheckController],
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
})
export class TodoModule {}
