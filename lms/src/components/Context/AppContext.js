import React, { Component } from 'react';

const AppContext = React.createContext()

class AppProvider extends Component {
    state = { 
        theme:'light'
     }

     setTheme=(theme)=>{
         this.setState((prevState)=>(theme))
     }


    render() { 

        const {children} = this.props
        const {theme} = this.state
        const {setTheme} = this
        return ( 
            <AppContext.Provider
            value={{theme,setTheme}}>
                {children}
            </AppContext.Provider>
         );
    }
}
 
export default AppContext;
export {AppProvider}