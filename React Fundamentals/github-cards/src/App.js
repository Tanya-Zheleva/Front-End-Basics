import React from 'react';
import Form from './Form';
import CardList from './CardList'

class App extends React.Component {
    state = {
        profiles: []
    };

    addProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }));
    }

    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

export default App;