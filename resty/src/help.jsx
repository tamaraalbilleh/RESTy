import React from 'react';


class Help extends React.Component {
    render (){
        return (
        <React.Fragment>
        <h2>How to use this website :</h2>
            <ul>
                <li>input the url for the api</li>
                <li>choose the method from the buttons below</li>
                <li>press on GO</li>
                <li>to use the history : click on the button next to the history query then press GO</li>
            </ul>
        </React.Fragment>

        )
    }
}

export default Help;