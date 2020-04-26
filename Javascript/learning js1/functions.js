function abdude(){
    console.log("You're pretty amusing yet awesome");
}
abdude();
// IMMIDIATELY INVOKABLE FUNCTIONS EXPRESSIONS-IIFEs
(function(name){
    console.log("You're Born to win Mr. "+name);
})('Abhinandan Sharma')

//Property Methods

const todo={
    add:function(){
        console.log("Add kr bhai");
    },
    edit:function(){
        console.log("Kya likh diya bhai");
    }
}
todo.add();
todo.edit();


//MAP
const user=[
    {id: 1,name:'Jonah'},
    {id: 2,name:'|Rock|'},
    {id: 3,name:'AbDUDE'}
];
const name=user.map(function(user){
    return user.name;
});
console.log(name); 
