import React from 'react';

class SideMenu extends React.Component{
    render(){
        return (
            <div className="ui vertical text menu">
                        <h5><label>Next Steps</label></h5>
                        <div className="ui basic olive button" href="">Export Graph</div>
                        <div className="ui basic button" href="">Generate Tracker</div>
                        <div className="ui basic button" href="">Generate Report</div>
                    </div>
        );
    }
}

export default SideMenu;
