import * as React from 'react';
import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { tabs } from '../constants/Tabs';

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {activeTab ? (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
