function game()
{
  // declaring variables
  var name , difficulty,choice = 0, score = 0; 
  
  //javascript object of array type to store results
  results = new Array();
  
  //math operators array
  var operators = ['+', '-', '*','/'];  
  console.log("Enter your Name");
  //ask user to enter name
  while(!name)
  {
	  name = prompt("Enter your name");
  }
  console.log("Select difficulty : type 1). Easy | 2). Medium | 3). High");
  //Check if difficulty value is correctly entered
  while(!difficulty || (difficulty != 1 && difficulty != 2 && difficulty != 3))
  {
	  difficulty =  parseInt(prompt("Enter difficulty level(1,2,3):"));
  }
  console.log("Name:" + name + " difficulty "+ difficulty);
  
  //Start game function
  results = startGame(difficulty,operators);
  
  //Show results get from game
   score += showResults(results);
  while(choice == 0)
  {
	choice = prompt("Enter 1 to re-play / 2 to exit");	  
	if(choice == 1){
		replay(); 
	}
  }
	
  close();

}
//Function to display results
function showResults(results)
{
	 // declaring variable
	var score = 0;
	for(var i = 0; i<5; i++)
    {
	  if(results[i] == true)
	  {
		  score =score +  10;
		  alert("Answer  " + (i+1) + "is correct");
		  console.log("Answer  " + (i+1) + "is correct");
	  }	
       else{
		   alert("Answer" + (i+1) + "is incorrect");
	     console.log("Answer" + (i+1) + "is incorrect");
       }	  
    }
	alert("Score : "+score);
}
//Function to start game
function startGame(difficulty,operators)
{
	//JavaScript array object to store answer results
	result = new Array();
	for(var i = 0; i<5; i++)
    {
	  //calling askQuestion to display and get question of answer
	  result[i] = askQuestion(i+1,difficulty,operators);
    }
	return result;
}

//Function return comparison result for actual answer and user answer
function compareAns(realAns,userAns)
{
		if(realAns == userAns)
			return true;
		else
			return false;
}

//Function to create, display and get answer of question from user
function askQuestion(counter,difficulty,opertors)
{
	 // declaring variables
	var numb1,numb2,numb3,numb4, realans = 0;
	var operator1, operator2 , operator3,userAns,question;
	
	//switch between three different levels of game
	switch(difficulty)
	{
		case 1:
		 // select operator from operator array randomly
		 operator1 = opertors[Math.floor(Math.random() * opertors.length)];
		 
		 //generate random numbers for operands
		 numb1 = Math.floor(Math.random() * 200) + 1 ;  
		 numb2 = Math.floor(Math.random() * 200) + 1 ; 
		  switch(operator1)
		  {
			  case '+':
			    realans = numb1 + numb2;
			  break;
			  case '*':
			    realans = numb1 * numb2;
			  break;
			  case '-':
			    realans = numb1 - numb2;
			  break;
			  case '/':
			    realans = numb1 / numb2;
			  break;
			 
		  }
		  question = "Question "+counter+": what is "+numb1+" "+operator1+" "+numb2 + " ?";
		break;
		case 2: 
		
		  // select operator from operators array randomly
		  operator1 = opertors[Math.floor(Math.random() * opertors.length)];
		  operator2 = opertors[Math.floor(Math.random() * opertors.length)];
		  
		  //generate random numbers for operands
		  numb1 = Math.floor(Math.random() * 1000) + 1 ; 
		  numb2 = Math.floor(Math.random() * 1000) + 1 ; 
		  numb3 = Math.floor(Math.random() * 1000) + 1 ; 
		   switch(operator1)
		  {
			  case '+':
			    realans = numb1 + numb2;
			  break;
			  case '*':
			    realans = numb1 * numb2;
			  break;
			  case '-':
			    realans = numb1 - numb2;
			  break;
			  case '/':
			    realans = numb1 / numb2;
			  break;
			 
		  }
		  switch(operator2)
		  {
			  case '+':
			    realans = realans + numb3;
			  break;
			  case '*':
			    realans = realans * numb3;
			  break;
			  case '-':
			    realans = realans - numb3;
			  break;
			  case '/':
			    realans = realans / numb3;
			  break;
			 
		  }
		   question = "Question "+counter+": what is "+numb1+" "+operator1+" "+numb2 +" "+operator2+" "+numb3 + " ?";
		break;
		case 3:
		 // select operator from operator array randomly
		 operator1 = opertors[Math.floor(Math.random() * opertors.length)];
		 operator2 = opertors[Math.floor(Math.random() * opertors.length)];
		 operator3 = opertors[Math.floor(Math.random() * opertors.length)];
		 
		 //generate random numbers for operands
		  numb1 = Math.floor(Math.random() * 100000) + 1 ; 
		  numb2 = Math.floor(Math.random() * 100000) + 1 ; 
		  numb3 = Math.floor(Math.random() * 100000) + 1 ;
		  numb4 = Math.floor(Math.random() * 100000) + 1 ;
		    switch(operator1)
		  {
			  case '+':
			    realans = numb1 + numb2;
			  break;
			  case '*':
			    realans = numb1 * numb2;
			  break;
			  case '-':
			    realans = numb1 - numb2;
			  break;
			  case '/':
			    realans = numb1 / numb2;
			  break;
			 
		  }
		  switch(operator2)
		  {
			  case '+':
			    realans = realans + numb3;
			  break;
			  case '*':
			    realans = realans * numb3;
			  break;
			  case '-':
			    realans = realans - numb3;
			  break;
			  case '/':
			    realans = realans / numb3;
			  break;
			 
		  }
		  switch(operator2)
		  {
			  case '+':
			    realans = realans + numb4;
			  break;
			  case '*':
			    realans = realans * numb4;
			  break;
			  case '-':
			    realans = realans - numb4;
			  break;
			  case '/':
			    realans = realans / numb4;
			  break;
			 
		  }
		  question = "Question "+counter+": what is "+numb1+" "+operator1+" "+numb2 +" "+operator2+" "+numb3 +" "+operator3+" "+numb4+ " ?";
		break;
	}
	console.log(question);
	console.log("Enter you Answer:");
	while(!userAns || isNaN(userAns) )
	{
		//get user answer
		userAns = parseInt(prompt(question));
	}
	//compare user answer with actual answer and return true or false
	return compareAns(realans,userAns);
}
function close(){ 
				window.location.href = "../index.html";
}
function replay(){
	game();
}
game();