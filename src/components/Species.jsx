import React, {Component, Fragment} from 'react';
import '../App.scss';
import axios from "axios";
import Specie from "./Specie";

class Species extends Component {


    constructor(props) {
        super(props);
        this.state = {
            species: [],
            filteredData: [],
        }

    }

    componentDidMount() {
        this.setState({
            data : this.getSpecies(),
            filteredData: ''
        })
    }

    // componentWillUnmount() {
    //     this.props.removeFilter();
    // }

    getSpecies() {
        axios.get("https://swapi.co/api/species").then(response => {
            this.setState({
                species: response.data.results
            });
        }).catch((err) => console.error(err));
    }

    render() {
        const filteredData = this.state.species.filter((specie) => {
            let dataName = specie.name.toLowerCase();
            return dataName.indexOf(
                this.props.nameFilter.toLowerCase()) !== -1
        });

        return (
            <Fragment data={this.state.filteredData}>
                <h2 className="title">Species</h2>
                {filteredData.map((specie) => (
                    <Specie specie={specie}/>
                ))}
            </Fragment>
        )
    }
}

Species.defaultProps = {
    nameFilter: '',
};

export default Species;