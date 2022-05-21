// firebase.auth().onAuthStateChanged(user => { });
// firebase.database().ref('/path/to/ref').on('value', snapshot => { });
// firebase.firestore().doc('/foo/bar').get().then(() => { });
// firebase.functions().httpsCallable('yourFunction')().then(() => { });
// firebase.messaging().requestPermission().then(() => { });
// firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
// firebase.analytics(); // call to activate
// firebase.analytics().logEvent('tutorial_completed');
// firebase.performance(); // call to activate

class Index extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          showWelcome: true,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
      _onButtonClick() {
        this.setState({
            showWelcome: false,
        });
      }
      render() {
        return (
          <div >
               <Animate/>
          </div>
        );
      }
    
}


class Animate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showMove: false,
    };

  }
  MoveButtonClick() {
    this.setState({
      showMove: true,
    });
  }
  render(){
    const showMove =this.state.showMove;
      return(  
        <div >
      <div>
          <h1 className={showMove ? 'Movingtext' : '_text'} onAnimationEnd={() => this.setState({ showMove: false })}>Good Price, Good Tea, Good Health</h1>
      </div>
          <button
          ref='button'
          onClick={() => this.setState({ showMove: true })}>
          Click me!
          </button>
          <div  className="_Title">
        <div className=" w3-animate-bottom"onClick={() => window.location.href='menu.html' }>
        <h1 className='w3-jumbo text-center textAnimation'>DEMO</h1>
        <p className='text-center arrowBounce'>Start Task 1 !!!!</p>   
        </div>
        </div>
      </div>

    ) }
}

ReactDOM.render(<Index/>,document.getElementById('index'));
