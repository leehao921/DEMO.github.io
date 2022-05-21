
class Menu extends React.Component{

    constructor(){
        super()
    this.state={
        drinks:
        [],

    };
}
    componentDidMount() {
        console.log("read stuff")
        let content=[];
        let URL;
        firebase.database().ref("Drinks").once("value",snapshot=>{
            console.log("read data ")
            
            snapshot.forEach((snap)=>{
                console.log(snap)
                firebase.storage().ref("Drinks/"+snap.val().Factory
                +".JPG").getDownloadURL().then((url)=>{
               URL=url;
               content={
                "url":URL,
                "teaType":snap.val().teaType,
               "details":snap.val().details,
           "id":' ' }
            //    console.log("url: "+URL)
                }).then(()=>{
                    this.setState({drinks:this.state.drinks.concat(content)});
                })
            });
        })
        
        console.log(this.state.drinks)
    }


    
    render(){
        let Cards=this._getInfo();
        return(
            <React.Fragment>
            {Cards}
            </React.Fragment>

        );
    }

    _getInfo(){
        console.log("mapping")
        
        return this.state.drinks.map((drinks) => { 
            console.log(drinks.name+"  "+drinks.url)
            return (
              <Cards 
                name={drinks.teaType}
                body={drinks.details} 
                url={drinks.url}
                />
            ); 
        });
    }
}



class Cards extends React.Component{
    render(){
        var getImg={
            backgroundImage: 'url(' + this.props.url + ')',
        }
        console.log("add card")
        return(
            <div class="flip  w3-animate-bottom">
                {this.props.key}
                <div class="front" style={getImg}>
                    <h1 class="text-shadow">{this.props.name}</h1>
                </div>
                <div class="back">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.body}</p>
                </div>
            </div>
            
        );
       
    }
}





ReactDOM.render(
    
    <Menu/>,
    document.getElementById('menu')
    
);


