import React from 'react';
import Flexbox from 'flexbox-react';
import Table from './Table';
import SideMenu from './SideMenu';

class Content extends React.Component{
    render(){
        return(
            <Flexbox flexDirection="row" alignContent="center">
                <Flexbox element="header" minWidth="500px">
                <div className="ui segment">
                    <h5 className="ui left floaded header">Score Breakdown</h5>
                    <div className="ui clearing divider"></div>
                    <Table />
                </div>
                </Flexbox>
                    
                <Flexbox minWidth="680px">
                    <img 
                            alt=""
                            src="http://placehold.it/650x400"
                        />
                </Flexbox>
    
                 <Flexbox element="footer" minWidth="200px">
                    <SideMenu />
                </Flexbox>
                
            </Flexbox>
        )
    }
}

export default Content;