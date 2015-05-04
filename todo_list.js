
function TodoList() {
  this.tasks = [];
};

TodoList.prototype = {
  add: function(description) {
    this.tasks.push(new Task(description, this));
  },

  list: function() {
    for (var i in this.tasks)
      console.log(this.tasks[i]);
  },

}

function Task(description, parentList) {
  this.id = ++Task.id;
  this.description = description;
  this.completed = false;
  this.parent = parentList
}

Task.id = 0;

Task.prototype = {
  complete: function() {
    this.completed = true;
  },

  remove: function() {
    var index = this.parent.tasks.indexOf(this);
    this.parent.tasks.splice(index, 1);
  },
}

// Driver code

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

console.log("foooooooooooooooo");
groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

