var CoderBox = React.createClass({

    getInitialState: function() {
        return {
            coders: []
        };
    },

    addCoder: function(username) {        

        var url = `https://api.github.com/users/${username}/repos`;
        $.get(url, function(repos) {
            var coders = this.state.coders.concat({ username, randomRepo: repos[Math.floor((Math.random() * repos.length))].name });
            this.setState({ coders });    
        }.bind(this));        
    },

    render: function() {
        return (
            <div className="container">
                <h1>Coders</h1>
                { this.state.coders.map(function(coder) {
                    return (<Coder username={coder.username} randomRepo={coder.randomRepo} />);
                })}

                <AddCoderForm onAdd={this.addCoder}/>
                
            </div>
        );
    }
});

React.render(<CoderBox />, document.querySelector("#app"));