var TodoList = function() {
  this.tasks = []
};


TodoList.prototype.add = function(task_description){
  var newTask = new Task(task_description)
  this.tasks.push(newTask)
  newTask.id = this.tasks.length
};

TodoList.prototype.list = function() {
  for (i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].removed === false) {
      console.log(this.tasks[i])
    };
  };
};

var Task = function(item_description) {
  this.id = 0
  this.description = item_description
  this.completed = false
  this.removed = false
};

Task.prototype.complete = function(){
  this.completed = true;
};

Task.prototype.remove = function(){
  this.removed = true;
};


var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
console.log(groceryList.tasks) //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

  // breadTask.prototype.complete = function(){
  //   this.completed == true;
  // };

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

console.log(breadTask)
// This should remove the task from the todo list
breadTask.remove();

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
