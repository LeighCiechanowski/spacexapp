import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading } from 'reactstrap';

export default class LaunchesSummaryListGroup extends Component {
    handleKeyUp = (event) => {
        this.props.filterLaunches(this.props.launches, event.target.value);
    }
    render() {
        return (
            <div>
                <div className="c-launches__listgroup">
                    <ListGroup >
                        <ListGroupItem className="justify-content-between">
                            <input placeholder="search launches" type="text" id="searchInput" onChange={this.handleKeyUp} />
                        </ListGroupItem>
                    </ListGroup>
                </div>
                <div className="c-launches__listgroup">
                    <ListGroup >
                        <ListGroupItem className="justify-content-between">
                            <h1>{ this.props.filteredLaunches.length }</h1>
                            <h3>Launches</h3>
                        </ListGroupItem>
                    </ListGroup>
                </div>
              <div className="c-launches__listgroup">
                <ListGroup>
                    <ListGroupItem className="justify-content-between"><Badge pill color="success">
                            {this.props.filteredLaunches.filter(function (el) { return el.launch_success == true}).length }
                        </Badge> Successful
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between"><Badge pill color="danger">
                            {this.props.filteredLaunches.filter(function (el) {return el.launch_success == false}).length }
                        </Badge> Failed 
                    </ListGroupItem>
                    </ListGroup>
                    </div>
                    <div className="c-launches__listgroup">
                    <ListGroup>
                    <ListGroupItem className="justify-content-between"><Badge pill color="info">
                            {this.props.filteredLaunches.filter(function (el) {return el.rocket.rocket_id == 'falcon1'}).length }
                        </Badge> Falcon 1 
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between"><Badge pill color="info">
                            {this.props.filteredLaunches.filter(function (el) {return el.rocket.rocket_id == 'falcon9'}).length }
                        </Badge> Falcon 9 
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between"><Badge pill color="info">
                            {this.props.filteredLaunches.filter(function (el) {return el.rocket.rocket_id == 'falconheavy'}).length }
                        </Badge> Falcon Heavy 
                    </ListGroupItem>
                </ListGroup>
            </div>
            </div>
        );
    }
}
