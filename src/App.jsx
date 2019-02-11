import React, {Component} from 'react';
import './App.scss';
import Species from "./components/Species";
import People from "./components/People";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    state = {
        result: {},
        dataFilter: '',
    };

    handleChange = (e) => {
        this.setState({
            dataFilter: e.target.value
        }, () => {
            this.inputRef.current.focus();
        });

        console.log(e.target.value);
    };

    clearFilter() {
        this.setState({
            dataFilter: '',
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <ul className="App-header">
                        <li>
                            <NavLink activeClassName="is-active" to="/species">Species</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="is-active" to="/people">People</NavLink>
                        </li>
                    </ul>
                    <div id="search">
                        <label>Search by Name: </label>
                        <input className="form-control"
                               type="text"
                               ref={this.inputRef}
                               value={this.state.dataFilter}
                               onChange={this.handleChange}/>
                    </div>

                    <div id="filter">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Filter_font_awesome.svg/2000px-Filter_font_awesome.svg.png"
                            alt="Filter" className="filter_image"/>
                    </div>

                    <Route exact path="/people" render={() => <People clearFilter={this.clearFilter()}
                        nameFilter={this.state.dataFilter}/>}/>
                    <Route exact path="/species" render={() => <Species nameFilter={this.state.dataFilter}/>}/>
                </div>
            </Router>
        )
    }
};

export default App;