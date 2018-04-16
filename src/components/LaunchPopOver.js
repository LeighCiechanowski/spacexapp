import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class LaunchPopOver extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            PopoverOpen: false
        };
        this.id = "flight" + this.props.flight;
    }
    toggle() {
        this.setState({
            PopoverOpen: !this.state.PopoverOpen
        });
    }
    render(){
        return (
            <div>
                <Button id={ this.id } onClick={this.toggle}>
                    Details
                </Button>
                <Popover placement="right" isOpen={this.state.PopoverOpen} target={ this.id } toggle={this.toggle}>
                    <PopoverHeader>Details</PopoverHeader>
                    <PopoverBody>{ this.props.details}<br /><br /> <a href={"/launches/" + this.props.flight }>View full details</a></PopoverBody>
                </Popover>
                </div>
        )
    }
}