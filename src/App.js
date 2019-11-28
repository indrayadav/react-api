import React, {Component} from 'react';
import Articles from './components/articles';

class App extends Component {
    render() {
        return (
            <Articles articles={this.state.articles} />
        )
    }

    state = {
        articles: []
    };

    componentDidMount() {
        fetch('https://test.waituk.com/wp-json/entrada/v1/articles/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ articles: data })
            })
            .catch(console.log)
    }
}

export default App;