var React = require('react');
var ReactDOM = require('react-dom');

var Nav = React.createClass({
    getDefaultProps:function(){
        "use strict";
        return{
            a:'aaa'
        }
    },
    getInitialState:function(){
        "use strict";
        return{
            show: true
        }
    },
    handleChange:function(){
        "use strict";
        this.setState({
            show: !this.state.show
        });
    },
    render:function(){
        "use strict";
        return <div   >
            <NavHead show={this.handleChange} />
            <NavCon style={{display:this.state.show ? 'block': 'none'}} />
        </div>
    }
});
var NavHead = React.createClass({
    render:function(){
        "use strict";
        return <h3 onClick={this.props.show}>
            aaa
        </h3>
    }
});
var NavCon = React.createClass({
    render:function(){
        "use strict";
        return <div style={this.props.style}>
            bbb
        </div>
    }
});
ReactDOM.render(<Nav/>,document.body);

