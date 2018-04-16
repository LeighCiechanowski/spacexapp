import React from 'react';
import { Card, Alert, Jumbotron } from 'reactstrap';
import Navigation from '../components/Navigation';
import Masonry from 'react-masonry-component';

export default class Launch extends React.Component {
  constructor(props) {
    super(props);
    this.props.getLaunch();
  }
  renderMissionPatch(){
    if(  typeof this.props.launch.links !== "undefined") {
      return (<img src={ this.props.launch.links.mission_patch } height="300px" />);
    }
  }
  render() {
    if(this.props.launchIsLoading) {
      return(<div>LOADING</div>)
    }
    if (this.props.itemsHasErrored) {
      return <Alert color="danger">Sorry! There was an error loading the items</Alert>;
    }
    else{
    return(
      <div>
        <Masonry>
        <div className="c_launch-flight-number">
          <Card body>
        
            <h1 className="display-3">Launch { this.props.launch.flight_number }</h1>
         

           </Card>
          </div>
          <div className="c-launch-deatils">
          <Card body>
            { this.props.launch.details }
            </Card>
          </div>
          <div className="c_test1">
          <Card body>
          {this.renderMissionPatch()}
            {/* <img src="http://i.imgur.com/f2OA2As.png" height="300px" /> */}
            </Card>
          </div>
          <div className="c_test2">
          <Card body>
            <p>FAILURE</p>
            </Card>
          </div>
     
        </Masonry>
      </div>
    );
  }
  }
}