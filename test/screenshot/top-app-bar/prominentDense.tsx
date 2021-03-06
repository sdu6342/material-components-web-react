import * as React from 'react';
import TopAppBar from '../../../packages/top-app-bar';
import MaterialIcon from '../../../packages/material-icon';
import MainTopAppBarContent from './mainContent';

const TopAppBarProminentDenseScreenshotTest: React.FunctionComponent = () => {
  return (
    <div className='top-app-bar-container'>
      <TopAppBar
        prominent
        dense
        title='Miami, FL'
        navigationIcon={
          <MaterialIcon
            icon='menu'
            onClick={() => console.log('prominent dense click')}
          />
        }
        actionItems={[<MaterialIcon key='item' icon='bookmark' />]}
      />
      <MainTopAppBarContent prominent dense />
    </div>
  );
};

export default TopAppBarProminentDenseScreenshotTest;
