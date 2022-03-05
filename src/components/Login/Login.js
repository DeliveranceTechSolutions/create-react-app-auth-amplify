import React from 'react';
import App from '../../App';
import { AmplifyConfirmSignIn, AmplifySignIn, AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import aws_exports from '../../aws-exports';
Amplify.configure(aws_exports)



function Map() {
    //comment to build
    
  const isAuthenticated = () => {
      return localStorage.getItem('amplify-signin-with-hostedUI');
  }
    return (
        <div>
            { !!isAuthenticated() && <App /> }
        </div>
    )
}

export default withAuthenticator(Map);