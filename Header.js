import logo from "../asserts/logo.jpg";

export default function Header(){

    const mainStyle={

        backgroundColor:"black",

        display:"flex",

        justifyContent:"space-arround",

        alignItems:"center",

    };

 

    const logostyle={

        height:"100px",

        width:"200px",

    };

    const headerStyle={

        color:"white",

        fontFamily:"Arial Black",

        paddingLeft:"350px",

 

    };

 

    return(

        <div style={mainStyle}>

            <div>

                <img src={logo} alt="" style={logostyle}></img>

            </div>

            <div>

                <h1 style={headerStyle}>DogConnect</h1>            

            </div>

             

        </div>

    );

}