import React, { Component } from 'react';


class Home extends Component {
  state = {
    num: 10,
    showPopup: false,
  };

  componentDidMount() {
    console.log('did mount - работает при первом рендере');
  }

  componentDidUpdate() {
    console.log('did mount - работает при обновлении состояний');
  }

  togglePopup = () => {
    this.setState(prevState => ({
      showPopup: !prevState.showPopup,
    }));
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    const { num, str, showPopup } = this.state;
    const { sayHello } = this.props;
    return (
      <div>
        <h1>Hello World!</h1>
        <h1>{num}</h1>
        <button
          onClick={() => {
            this.setState({ num: num + 1 });
          }}
        >
          + 1
        </button>

        <button onClick={sayHello}>Click me!</button>

        <button onClick={this.togglePopup}>Show</button>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Hello World!</h2>
              <button onClick={this.closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
