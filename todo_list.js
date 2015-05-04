var newTodoList = function() {
	// ???

};


function TodoList(){
  this.tasks = new Array();
}

function Task(name, id, parent){
  this.id = id,
  this.parent = parent,
  this.description = name,
  this.completed = false
};

TodoList.prototype.add = function(item){
  var id = this.tasks.length + 1
  this.tasks.push(new Task(item, id, this));
}

TodoList.prototype.list = function(){
  for (i=0; i<this.tasks.length; i++) {
    console.log( this.tasks[i] );
  }
}

TodoList.prototype.remove = function(id){
 this.tasks.splice(id, 1);
}

Task.prototype.complete = function(id){
  this.completed = true
}

Task.prototype.remove = function(){
  this.parent.remove(this);
}


// Driver code


var todoList = newTodoList();


// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


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
