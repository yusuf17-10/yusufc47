class Form{
    constructor(){
        this.input = createInput("username");
        this.password=createInput("","password");
        this.button = createButton("SignUp");
        this.greeting=createElement("h2");
        this.input2 = createInput("username");
        this.password2=createInput("","password");
        this.button2 = createButton("login");
        this.greeting2=createElement("h3");
        this.greeting3=createElement("h3");
                
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.password.hide();
        this.input2.hide();
        this.button2.hide();
        this.password2.hide();
        this.greeting2.hide();
        this.greeting3.hide();
    }

   display(){
        var title = createElement('h2');
        title.html("TimeTable");
        title.position(displayWidth/2-40,0);

        this.greeting2.html("(OR)");
        this.greeting2.position(displayWidth/2+50,displayHeight/2-150);

        this.greeting3.html("Login (OR)  SignUp");
        this.greeting3.position(displayWidth/2,displayHeight/6);

       this.input.position(displayWidth/2+300,displayHeight/2-150);
       this.button.position(displayWidth/2+300,displayHeight/2);
       this.password.position(displayWidth/2+300,displayHeight/2-100);

       this.input2.position(displayWidth/2-300,displayHeight/2-150);
       this.button2.position(displayWidth/2-300,displayHeight/2);
       this.password2.position(displayWidth/2-300,displayHeight/2-100);
      

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.password.hide();
            this.greeting2.hide();
            this.greeting3.hide();
            this.input2.hide();
            this.button2.hide();
            this.password2.hide();

            user.password= this.password.value();
        

            user.name= this.input.value();
            userCount++;
            user.index=userCount;
            user.update();
            user.updateCount(userCount);
            this.greeting.html("hello "+ user.name);
            this.greeting.position(displayWidth/2-400,0);
           gameState=1;
        });

        this.button2.mousePressed(()=>{
            this.input2.hide();
            this.button2.hide();
            this.password2.hide();
            this.greeting2.hide();
            this.greeting3.hide();
            this.input.hide();
            this.button.hide();
            this.password.hide();
            var  flag=0;
            user.name= this.input2.value();
            user.password= this.password2.value();
            
            console.log(allUsers);
            for(var i=0; i<allUsers.length;i++){
                if(user.name===allUsers[i].name &&   user.password=== allUsers[i].password){
                    user=allUsers[i];
                    flag=1;

                }
            }
            
            if(flag===0){
                alert("userName (OR) password is WRONG");
                gameState=1;
                user.name=null;
                user.password=null;
            }else if(flag===1){
                gameState=2;
            }
            console.log(user);
            console.log(flag);
            
            
           
        });
      
        
    }
}