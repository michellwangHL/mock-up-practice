import React from 'react';

class Table extends React.Component{
    render(){
        return(
            <table width="450">
                <thead>
                    <tr><th></th>
                    <th>Available</th>
                    <th>Weighting</th>
                    <th>Awarded</th>
                    <th>Targeted</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Management</td>
                        <td>19</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>Health & Wellbeing</td>

                    </tr>
                    <tr>
                        <td>Energy</td>

                    </tr>
                    <tr>
                        <td>Transport</td>

                    </tr>
                    <tr>
                        <td>Water</td>

                    </tr>
                    <tr>
                        <td>Materials</td>

                    </tr>
                    <tr>
                        <td>Waste</td>

                    </tr>
                    <tr>
                        <td>Land Use & Ecology</td>

                    </tr>
                    <tr>
                        <td>Pollution</td>

                    </tr>
                    <tr>
                        <td>Innovation</td>

                    </tr>
                    <tr>
                        <td>Total</td>

                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;