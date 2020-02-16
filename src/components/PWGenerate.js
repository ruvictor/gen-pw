import React, { Component } from 'react';

class PWGenerate extends Component {
    state = {
        password: '',
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
        this.setState({
            passwordLength: e.target.value.length > 7 ? true : false
        });
    }

    render(){
        let {
            password,
            passwordLength,
            containsNumbers,
            isUpperCase,
            containsSymbols
        } = this.state
        // console.log(this.state.password)
        return(
            <>
            <form>
                <input type="text" onChange={this.handleChange('password')} value={password} placeholder="Enter Password" />
                <div>
                <div className={passwordLength ? 'green' : null}>Contains More than 8 characters</div>
                <div className={containsNumbers ? 'green' : null}>Contains numbers</div>
                <div className={isUpperCase ? 'green' : null}>Contains UpperCase</div>
                <div className={containsSymbols ? 'green' : null}>Contains Symbols</div>
            </div>
            <button disabled={true}>Submit</button>
            </form>
            </>
        );
    }
}

export default PWGenerate;