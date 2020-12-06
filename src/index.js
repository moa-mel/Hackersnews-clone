import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import {AppProvider, WebAuth0AuthClient} from '@8base/react-sdk';

const URI="https://api.8base.com/cki6pbaq501ax07mke1en1vq4"
const auth0WebClient = new WebAuth0AuthClient({
  domain: "secure.8base.com",
  clientId: "//5fc6e696b9720a00075a3a83.auth.us-east-1.amazoncognito.com",
  redirectUri: `${window.location.origin}/auth/callback` ,
  logoutRedirectUri:`${window.location.origin}/`,
});

const client = new ApolloClient({
  uri: "https://api.8base.com/cki6pbaq501ax07mke1en1vq4"
})

ReactDOM.render(
  <ApolloProvider client={client}>
<AppProvider uri={URI} authClient={auth0WebClient} >
  {({loading}) => {
    if (loading) {
      return<p>Please wait...</p>;
    }
    return <App />;
  }}
  </AppProvider>
</ApolloProvider>,
document.getElementById('root')
);