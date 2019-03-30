import React, {Component} from 'react'
import './header.scss'

class Header extends Component {
    render() {
        return (
            <header className='header pl-5 pr-5'>
                <div className="content">
                    <img className="logo" alt="Medwing"
                         src="https://assets.medwing.com/assets/logotype-black-f323fb2c273e4cae19803ee65557ef1032da660c938afeb9a4a116ddb1dc23d0.svg"/>
                </div>
            </header>
        )
    }
}

export default Header;
