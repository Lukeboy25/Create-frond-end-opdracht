import React, {Component, Fragment} from 'react';
import axios from "axios";
import Person from "./Person";

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people : [],
        }
    }
    
    componentDidMount() {
        this.getPeople();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.props.clearFilter();
    }

    getPeople() {
        axios.get("https://swapi.co/api/people").then(response => {
            this.setState({
                people : response.data.results
            });
        }).catch((err) => console.error(err));
    }

    render() {
        const filteredData = this.state.people.filter((person) => {
            let dataName = person.name.toLowerCase();
            return dataName.indexOf(
                this.props.nameFilter.toLowerCase()) !== -1
        });

        return (
            <Fragment>
                <h2 className="title">People</h2>
                {filteredData.map((person) => (
                    <Person person={person} />
                ))}

            </Fragment>
        )
    }
}

export default People;