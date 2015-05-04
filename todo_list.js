var TodoList = function() {
  this.tasks = [];
};

var Task = function(array, string){
  this.id = array.length + 1;
  this.description = string;
  this.completed = false;
  this.tasksList = array;
};

Task.prototype.complete = function(){
  return this.completed = !this.completed;
};

Task.prototype.remove = function(){
  for ( i = 0; i < this.tasksList.length; i++ ) {
    if (this.id === this.tasksList[i].id) {
      return this.tasksList.splice(i, 1);
    };
  };
};

TodoList.prototype.add = function(string) {
  var task = new Task(this.tasks, string);
  return this.tasks.push(task);
};

TodoList.prototype.list = function() {
  for( i = 0; i < this.tasks.length; i++ ) {
    console.log(this.tasks[i])
  };
};

// Driver code
// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
console.log(groceryList.add('bread'));
console.log(groceryList.add('cheese'));
console.log(groceryList.add('milk'));

// tasks is now an array of Task objects
console.log(groceryList.tasks) //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

console.log(breadTask.id); //-> 1 (some unique numerical ID)
console.log(breadTask.description); //-> 'bread'
console.log(breadTask.completed); //-> false


// This should complete the task
breadTask.complete();

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
breadTask.remove();

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
