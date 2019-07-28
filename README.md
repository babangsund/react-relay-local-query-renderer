# react-relay-local-query-renderer

A local QueryRenderer for Relay.  
For querying local data without sending a request to the server.

Provides functionality (likely) found in the *next* build of [relay](https://relay.dev/):  
https://github.com/facebook/relay/blob/master/packages/react-relay/ReactRelayLocalQueryRenderer.js.

Notice that the Relay compiler still requires you to include a server schema field in the query.  

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save react-relay-local-query-renderer

Using [yarn](https://yarnpkg.com/):

    $ yarn add react-relay-local-query-renderer


Then with a module bundler like [webpack](https://webpack.github.io/), use as you would anything else:

```js
// Using ES6 Modules
import ReactRelayLocalQueryRenderer from "react-relay-local-query-renderer";
// using CommonJS modules
const ReactRelayLocalQueryRenderer = require("react-relay-local-query-renderer");
```


## Usage

Used just like a regular [QueryRenderer](https://relay.dev/docs/en/query-renderer).  
Unlike `QueryRenderer`,  `LocalQueryRenderer` is able to return a snapshot on the initial render.

```jsx
import LocalQueryRenderer from "react-relay-local-query-renderer";
import environment from "./Environment";

function MyApp({ children }) {
  return (
    <LocalQueryRenderer
      variables={{}}	 
      environment={environment}
      query={graphql`
        query AppQuery {
          __typename
          settings {
            title
          }
        }
      `}
      render={({ props }) => {
        return <div>{props.settings.title}</div>;
      }}
    />
  );
}
```



## Credits

ReactRelayLocalQueryRenderer is built and maintained by **babangsund**.
[@github](https://github.com/babangsund).
[@twitter](https://twitter.com/babangsund).
