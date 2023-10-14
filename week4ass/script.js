var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i=0;i<names.length;i++){
    name=names[i]
    if(name[0]=='j' || name[0]=='J'){
        console.log("Goodbye " + name)
    }
    else{
        console.log("Hello " + name)
    }
}