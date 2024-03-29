import React, { Component } from 'react';

import './style.scss';
import LocalStorage from '../../services/local-storage';
import history from '../../helpers/history';
import AdminPanelContactsContainer from './AdminPanelContactsContainer';
import AdminPanelProfileContainer from './AdminPanelProfileContainer';
import AdminPanelProjectsContainer from './AdminPanelProjectsContainer';

export class AdminPanel extends Component {
  constructor(props) {
    super(props);

    !LocalStorage.isLogin() && history.push('/login');
  }

  logout = () => {
    LocalStorage.removeTokens();
    history.push('/login');
  };

  render() {
    return (
      <>
        <div className="admin-panel-container">
          <div className="tabs-container  uk-width-auto@m">
            <ul
              className="uk-tab-left"
              data-uk-tab="connect: #component-tab-left; animation: uk-animation-fade"
            >
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="tabs-content m-3 uk-width-expand@m">
            <ul id="component-tab-left" className="uk-switcher">
              <li>
                <AdminPanelProfileContainer />
              </li>
              <li>
                <AdminPanelProjectsContainer />
              </li>
              <li>
                <AdminPanelContactsContainer />
              </li>
            </ul>
          </div>
          <div className="exit-btn">
            <span uk-icon="icon: close; ratio: 2" onClick={this.logout} />
          </div>
        </div>
      </>
    );
  }
}

export default AdminPanel;
