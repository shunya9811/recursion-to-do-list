class ToDoList{
    constructor(title){
        this.title = title;
    }
}

var vm = new Vue({
    el: "#app",
    data(){
        return{
            title: "",
            toDoList: []
        }
    },
    computed: {
        btnDisaled: function(){
            return this.title === "";
        }
    },
    methods: {
        createTask: function(){
            let task = new ToDoList(this.title, this.id);
            this.toDoList.push(task);
            this.title = "";
        },
        deleteTask: function(index){
            this.toDoList.splice(index, 1);
        }
    }
});