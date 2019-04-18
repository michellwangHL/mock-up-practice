import React from 'react';
import TopMenu from './TopMenu';
import Content from './Content';

class App extends React.Component{
    render() {
        return (
            <div>
                <TopMenu />
                <div className="ui justified container">
                    <h1>Project Name</h1>
                    <h3>Assessment Type:</h3>
                    <p></p>
                    <Content />
                    <p></p>
                </div>
            </div>
        )
    }
}

export default App;