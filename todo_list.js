var TodoList = function() {
  this.tasks = [];
  this.add = function(item) {
    task = new Task((this.tasks.length + 1), item)
    this.tasks.push(task)
  };
  this.list = function(){
    for (var i = 0; i < this.tasks.length; i++){
      console.log(this.tasks[i])
    };
  };
};


var Task = function(id, description){
  this.id = id;
  this.description = description;
  this.completed = false;
}

Task.prototype.complete = function(){
  this.completed = true
}

// Drive code


// Note we are using a JavaScript constructor now.
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

console.log(breadTask.id) //-> 1 (some unique numerical ID)
console.log(breadTask.description) //-> 'bread'
console.log(breadTask.completed) //-> false


// This should complete the task
breadTask.complete();

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
/*

// This should remove the task from the todo list
breadTask.remove();

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}



*/
