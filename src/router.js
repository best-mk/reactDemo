//引入react jsx写法的必须
import React from 'react';
//引入一些模块
import { BrowserRouter as Router, Route,HashRouter,Link} from "react-router-dom";

/**
 * 定义 Home 组件
 * @type {String}
 */
class Home extends React.Component{
  render(){
    return(<div>
      Home
    </div>) ;
  }
}
/**
 * 定义 About 子页面组件
 * @type {String}
 */
class About extends React.Component{
  render(){
    return(
      <div>About</div>
    ) ;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/about">关于我</Link></li>
        </ul>
      </div>
    );
  }
}

function router(){
  return (
    <HashRouter>
    <div>
    <Route path="/" component={App}/>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </div>
  </HashRouter>);
}

export default router;