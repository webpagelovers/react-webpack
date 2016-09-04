var React = require('react');
var ReactDOM = require('react-dom');
var DropDown = React.createClass({
    getDefaultProps:function(){
        "use strict";
        return{
            dropDownToggle:'',
            dropDownMenu:null
        }
    },
    getInitialState:function(){
        "use strict";
        return{
            show: false
        }
    },
    handleChange:function(){
        "use strict";
        this.setState({
            show: !this.state.show
        })
    },
    render:function(){
        "use strict";
        return <div className="dropdown">
            <DropDownToggle show={this.handleChange} dropDownToggle={this.props.dropDownToggle} />
            <DropDownMenu style={{display:this.state.show ? 'block': 'none'}} dropDownMenu={this.props.dropDownMenu} />
        </div>
    }
});
var DropDownToggle = React.createClass({
    render:function(){
        "use strict";
        return <button type="button" className="btn btn-default dropdown-toggle" onClick={this.props.show}>
            {this.props.dropDownToggle}
            <span className="caret"></span>
        </button>
    }
});
var DropDownMenu = React.createClass({
    render:function(){
        "use strict";
        return <ul className="dropdown-menu" style={this.props.style}>
            {
                this.props.dropDownMenu.map(function(result,index){
                    return <DropDownMenuList key={index} data={result} />
                })
            }
        </ul>
    }
});
var DropDownMenuList = React.createClass({
    render:function(){
        return <li>
            <a href="#">{this.props.data}</a>
        </li>
    }
});

module.exports = DropDown;
