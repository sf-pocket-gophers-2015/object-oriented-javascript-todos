var TodoList = function() {
  this.tasks = [];

};

TodoList.prototype = {

  add: function(item) {
    this.tasks.push( {id: this.tasks.length + 1, description: item, completed: false })
    },

  list: function(){ 
    for(var i = 0; i < this.tasks.length; i++){
      console.log(this.tasks[i]);
    }
  },

  indexOf: function(item){
    return this.tasks.indexOf(item)
  },
};


var Task = function () {
  this.completed = false; 
}

Task.prototype = {
  complete: function(){
    return this.completed = true;
  },

  remove: function(){
    delete this;
  }
};



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
breadTask = new Task(); 


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




