import { Project } from './project';
import projectList from './projectList';
import { Todo } from './todo';

// test
let p1 = new Project('Important', 'Put your the most important TODOs here!');
projectList.add(p1);

let todo1 = new Todo(p1, 'Go to the store', 'Buy stuff', 1, null);
p1.addTodo(todo1);

let todo2 = new Todo(p1, 'Prepare to the exam', 'Read a lot of books...', 2, null);
p1.addTodo(todo2);

let p2 = new Project('My JS Project', 'A plan to become rich');
projectList.add(p2);

let p2todo1 = new Todo(p2, 'Create idea for an app', '... or make a clone of something', 1, null);
p2.addTodo(p2todo1);

let p2todo2 = new Todo(p2, 'Code an app', 'Make sure you know JS!', 2, null);
p2.addTodo(p2todo2);

let p2todo3 = new Todo(p2, 'Deploy it', 'Let millions of people know about your app', 2, null);
p2.addTodo(p2todo3);

let p2todo4 = new Todo(p2, 'PROFIT', 'Get money', 2, null);
p2.addTodo(p2todo4);
