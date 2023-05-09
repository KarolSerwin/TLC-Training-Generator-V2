import React, {useEffect} from "react";



const GoogleAuth = () => {

    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
      }

useEffect(() => { 
    /*global google*/
    
      
        google.accounts.id.initialize({
          client_id: "1040051880507-b5g7lrkg1kn6n6vc1c1i5uoqajvif5rv.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" }  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
      

  },[]); 

  return <div id="buttonDiv"></div>


}


export {GoogleAuth}