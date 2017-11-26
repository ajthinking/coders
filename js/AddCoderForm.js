var AddCoderForm = React.createClass({

    getInitialState: function() {
        return {
            text: ""
        };
    },

    onChange: function(e) {
        this.setState({ text:e.target.value});
    },

    fetchCoder: function(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text: ""});
    },

    render: function() {
        return (
            <div>
                <form onSubmit={this.fetchCoder}>
                    <div className="form-group">
                        <input className="form-control" value={this.state.text} onChange={this.onChange} placeholder="Type a github username"/>
                    </div>
                    <button type="submit" className="btn btn-primary" >Fetch user</button>
                </form>
            </div>
        );
    }
});