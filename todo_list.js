var TodoList = function() {
  this.tasks = [];
};

var Task = function(id, description, parent) {
  this.id = id
  this.description = description
  this.completed = false
  this.parent = parent
};

Task.prototype = {
  remove: function() {
     list_array = this.parent.tasks
        for (var i=0;i<list_array.length;i++){
          if (list_array[i] === this){
            delete list_array[i]
            }
          }
  }
};

TodoList.prototype = {

  add: function(descript) {
    console.log(this)
    id = this.tasks.length + 1
    var item = new Task(id, descript, this)
    this.tasks.push(item)
  },

  list: function() {
    // console.log(this.tasks)
    this.tasks
  },

  tasks: function() {
    this.tasks
  },

  indexOf: function(item) {
    console.log(this.tasks.indexOf(item))
    this.tasks.indexOf(item)
  },

  remove: function(index) {
    delete this.tasks[index]
  },

  get: function(index) {
    // console.log(this.tasks[index])
    this.tasks[index]
  },

  complete: function(index) {
    this.tasks[index]["completed"] = true
  },
};


// newTodoList()
// console.log("running again with new")
// new newTodoList()

// grovcerylist = new Todolist

// Driver code

var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

groceryList.list();

groceryList.tasks;




var breadTask = groceryList.tasks[0];
console.log(breadTask)
// console.log(breadTask.id)
// breadTask.description
// breadTask.completed

// breadTask.complete();
// groceryList.list();
breadTask.remove();
groceryList.list();

console.log(groceryList.tasks);

