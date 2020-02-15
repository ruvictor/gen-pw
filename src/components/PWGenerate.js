import React, { Component } from 'react';

class PWGenerate extends Component {
    state = {
        passwordLength: false,
        containsNumbers: false,
        isUpperCase: false,
        containsSymbols: false
    }

    // check to see if there is any number
    checkForNumbers(string){
        var matches = string.match(/\d+/g);
        this.setState({
            containsNumbers: matches != null ? true : false
        });
    }

    // check for upper case
    checkForUpperCase(string){
        var matches = string.match(/[A-Z]/);
        this.setState({
            isUpperCase: matches != null ? true : false
        });
    }

    // check for symbols
    checkForSymbols(string){
        var symbols = new RegExp(/[^A-Z a-z0-9]/);
        this.setState({
            containsSymbols: symbols.test(string) ? true : false
        });
    }

    // handle password
    handleChange = input => e =>{
        this.checkForNumbers(e.target.value);
        this.checkForUpperCase(e.target.value);
        this.checkForSymbols(e.target.value);
        if(e.target.value.length > 4){
            this.setState({
                passwordLength: true
            })
        }
    }

    render(){
        let {
            passwordLength,
            containsNumbers,
            isUpperCase,
            containsSymbols
        } = this.state
        // console.log(this.state.password)
        return(
            <>
            <form>
                <input type="text" name="password" onChange={this.handleChange('password')} />
                <div>
                    Contains More than 4 characters: {passwordLength ? 'OK' : null} <br />
                    Contains numbers: {containsNumbers ? 'OK' : null}<br />
                    Contains UpperCase: {isUpperCase ? 'OK' : null}<br />
                    Contains Symbols: {containsSymbols ? 'OK' : null}
                </div>
                <button>Submit</button>
            </form>
            </>
        );
    }
}

export default PWGenerate;