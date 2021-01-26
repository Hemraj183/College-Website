function validate(){//using javscript
	  var name=document.forms["myForm"]["Name"].value;
      var email=document.forms["myForm"]["Email"].value;
      var phone=document.forms["myForm"]["Phone"].value;
      var message=document.forms["myForm"]["Message"].value;

      if(name=="" || email=="" || phone=="" || message==""){
        alert("Please fill the form");
      }
      else{
        alert("Thank you, "+name);
      }
    }