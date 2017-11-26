var CoderBox = React.createClass({

    getInitialState: function() {
        return {
            coders: []
        };
    },

    addCoder: function(username) {        

        var url = `https://api.github.com/users/${username}/repos`;
        $.get(url, function(repos) {
            var selectedRepoIndex = Math.floor((Math.random() * repos.length));
            var coders = this.state.coders.concat({ username, randomRepo: repos[selectedRepoIndex].name });
            this.setState({ coders });
            
            var msg = new SpeechSynthesisUtterance();            
            msg.text = `Wow, ${username} seems to be a really good boy, he actually created ${repos[selectedRepoIndex].name}. We should problably hire him.`;
            window.speechSynthesis.speak(msg);
        }.bind(this));        
    },

    render: function() {
        return (
            <div className="container">
                <h3>Reqruitment bot</h3>
                <img src="https://giant.gfycat.com/ShrillUnfortunateCod.gif"/>
                <h4>your expert on github reviews.</h4>
                { this.state.coders.map(function(coder) {
                    return (<Coder username={coder.username} randomRepo={coder.randomRepo} />);
                })}

                <AddCoderForm onAdd={this.addCoder}/>
                
            </div>
        );
    }
});

React.render(<CoderBox />, document.querySelector("#app"));