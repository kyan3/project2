function validate()
      {
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		
		if ( username == "john" && password == "securepass")
		{
			var connect = true;
		}
		else
		{	
			alert( "Enter a valid login" );		
			location.reload();
		}

		 if ( connect )
		 {
			alert( "Welcome to MyIIT" );
			window.location = 'dashboard.html' ;
		 }
		 
         return( false );
      }
	 
