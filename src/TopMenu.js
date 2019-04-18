import React from 'react';

class TopMenu extends React.Component{
    render (){
        return(
        <div className = "ui inverted segment">  
            <div className = "ui inverted secondary pointing menu">
                <button className = "item">Home</button>
                <div className = "ui simple dropdown item">
                    Projects
                    <i className="dropdown icon"></i>
                    <div className="menu">
                        <div className="item">
                            <i className="dropdown icon"></i>
                            <span className="text">Project 1</span>
                            <div className="menu">
                                <div className="item">Pre-Assessment</div>
                                <div className="item">Design Stage</div>
                            </div>
                        </div>
                        <div className="item">
                        <i className="dropdown icon"></i>
                            <span className="text">Project 2</span>
                            <div className="red menu">
                                <div className="item">Pre-Assessment</div>
                                <div className="item">Design Stage</div>
                                <div className="item">Post-Construction Review</div>
                                <div className="item">QA</div>
                            </div>
                        </div>
                        <div className="item">Project 3</div>
                    </div>
                </div>
                <div className="ui simple dropdown item">
                    Account
                    <i className = "dropdown icon"></i>
                    <div className="menu">
                        <div className ="item">Settings</div>
                        <div className ="item">Log out</div>
                    </div>
                </div>
                <button className="item">Resources</button>
                <div className="right menu">
                    <button className="ui item">Help</button>
                </div>
            </div>
        </div>
        );
    }
}

export default TopMenu;