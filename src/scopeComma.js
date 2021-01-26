function Test(){
    this.name="xjj";
    var Dog={
        name:"djj",
        growl:function(){
            console.log("~~~~~~%o",this.name);
        }
    }
    Dog.growl();
    (0,Dog.growl)()  
}
Test();