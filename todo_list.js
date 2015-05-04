var TodoList = function() {
  this.tasks = [];
};

var Task = function(list, description){
  this.belongs_to = list;
  this.id = list.tasks.length + 1;
  this.description = description;
  this.completed = false;
};

TodoList.prototype = {

  add: function(item){
    this.tasks.push(new Task(this, item));
  },

  list: function(){
    this.tasks.forEach(function(task){
      console.log(task);
    });
  },

  remove: function(id){
    delete this.tasks[id - 1];
  },
};

Task.prototype = {

  complete: function(){
    this.completed = true;
  },

  remove: function(){
    list = this.belongs_to;
    list.remove(this.id);
  },

};



// Driver code

// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks; //-> [Task, Task, Task]

// groceryList.list();
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

// groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
breadTask.remove();
console.log('---------------------------------')
groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}




