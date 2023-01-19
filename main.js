class Task{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
}

class TodoList{
    constructor(theme, tasks){
        this.theme = theme;
        this.tasks = tasks;
    }
}

var vm = new Vue({
    el: "#app",
    data(){
        return{
            theme: "",
            title: [],
            toDoLists: []
        }
    },
    computed: {
        addToDoListbtnDisaled: function(){
            return this.theme === "";
        },
        //computedは基本的に引数を取らないが、アロー関数なら可能
        /*addTaskbtnDisaled: function() {
            return function(i){
                return this.title[i] === "";
            }
        }*/
    },
    methods: {
        createToDoList: function(){
            let todolist = new TodoList(this.theme, []);
            this.toDoLists.push(todolist);
            this.theme = "";
        },
        deleteToDoList: function(i){
            this.toDoLists.splice(i, 1);
        },
        createTask: function(i){
            let task = new Task(this.title[i], new Date().toISOString().slice(0, 10));
            this.toDoLists[i].tasks.push(task);
            this.title[i] = "";
        },
        deleteTask: function(i, j){
            this.toDoLists[i].tasks.splice(j, 1);
        },
        //computed,methodsどちらも１つ目のTaskを""で作れてしまう
        addTaskbtnDisaled: function(i){
            return this.title[i] === "";
        }
    }
});

