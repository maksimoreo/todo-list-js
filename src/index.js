import { Project } from './project';
import projectList from './projectList';
import { Todo } from './todo';

// test
let p1 = new Project('test1', 'testtesttest');
projectList.add(p1);

let todo1 = new Todo(p1, 'test-todo', 'testtesttest', 1, null);
p1.addTodo(todo1);

let p2 = new Project('test2', 'testtesttest');
projectList.add(p2);
