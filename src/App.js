import React from 'react';
import Header from "./components/header/Header";
import Post from './pages/post/Post';
import Posts from "./pages/posts/Posts";
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className="container-center">
                    <Route component={Posts} path='/posts'/>
                    <Route component={Post} path='/onePost'/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
