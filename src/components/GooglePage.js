import React, { Component } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import user from '../images/user.jpg'
import googleLogo from '../images/Google-Logo.png';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MicIcon from '@material-ui/icons/Mic';

class GooglePage extends Component {
    render() {
        return (
            <div className="firstPage">
                <nav className="navigation">
                    <div className="navbar">
                        <a href="https://mail.google.com/">Почта</a>
                        <a href="https://www.google.ro/imghp?hl=ru&authuser=0&ogbl">Картинки</a>
                        <div className="appBox">
                            <AppsIcon className="app" />
                        </div>
                        <div className="user">
                            <img src={user} alt="user" />
                        </div>
                    </div>
                </nav>
                <div className="googler">
                    <img src={googleLogo} alt="google" />
                </div>
                <div className="searchBar">
                    <InputGroup className="inputBox">
                        <InputGroupAddon addonType="prepend" className="inputGroupAddon1">
                            <InputGroupText className="searchBox">
                                <SearchIcon className="searchIcon" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input className="input" type="text" />
                        <InputGroupAddon addonType="append" className="inputGroupAddon">
                            <InputGroupText className="keyboardBox">
                                <KeyboardIcon className="keyboardIcon" />
                            </InputGroupText>
                            <InputGroupText className="micBox">
                                <MicIcon className="micIcon" />
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="buttonBar">
                    <div className="center">
                        <a href="#">Поиск в Google</a>
                        <a href="https://www.google.com/doodles">Мне повезёт!</a>
                    </div>
                </div>
                <div className="titleBar">
                    <p>Сервисы Google доступны на разных языках:
                        <a href="#">O`zbek</a>
                        <a href="#">Română</a>
                        <a href="#">magyar</a>
                        <a href="#">Deutsch</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default GooglePage;
