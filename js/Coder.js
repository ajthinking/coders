var Coder = React.createClass({
    render: function() {
        return (
            <div className="container portfolio">
                {this.props.username} created <button className="btn btn-success">{this.props.randomRepo}</button>
            </div>
        );
    }
});