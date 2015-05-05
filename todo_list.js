

// Constructors:
var TodoList = function() {
  this.tasks = [];
};

var Task = function(item, parent) {
  this.id = Task.lastUUID++;
  this.description = item;
  this.completed = false;
  this.parent = parent;
};

Task.lastUUID = 1; //this is a global variable sucker, start at 1 for driver code.

// Prototypes:
TodoList.prototype = {
  add: function(item){
    this.tasks.push(new Task(item, this)); //pass in this to save the parent object to Task
  },

  list: function(){
    for(var i=0; i<this.tasks.length; i++) {
      console.log(this.tasks[i]);
    }
  },

  remove_task: function(task) {
    var task_index;
    for(var i=0; i<this.tasks; i++) {   //find the index of the task to be deleted
      if (this.tasks[i].id = task.id) {
        task_index = i;
      }
    }
    this.tasks.splice(task_index, 1);   //delete the task from our list
  }
};

Task.prototype = {
  complete: function(){
    this.completed = true;
  },
  remove: function(){
    this.parent.remove_task(this);
  }
};


// Driver code
//var todoList = newTodoList();

// We copied this shit below from the challenge:
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
