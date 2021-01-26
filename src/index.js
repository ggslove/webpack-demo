import Hello from './say';

function Index(name,age){
    Hello(name+","+age);
    document.getElementById("root").innerHTML="hahah";

}


Index("Alice",10)