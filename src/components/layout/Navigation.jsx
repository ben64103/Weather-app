/* eslint-disable react/prop-types */
import { useState } from 'react';
import Search from '../Search';
import ToggleSwitch from '../ToggleSwitch';
import Container from '../common/Container';
import SwitchDegree from '../common/SwitchDegree';

const Navigation = (props) => {
  const { searchQuery, handleSearch, searchResults } = props;
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    console.log(checked);
    setChecked(!checked);
  };

  return (
    <nav className='w-full'>
      <Container>
        <div className='w-full flex items-center justify-between py-8'>
          <img
            src='./src/assets/icons/logo.svg'
            alt='weather app logo'
            className='pointer-events-none object-cover'
          />
          <Search
            searchQuery={searchQuery}
            handleSearch={handleSearch}
            searchResults={searchResults}
          />
          <ToggleSwitch checked={checked} handleChecked={handleChecked}>
            <SwitchDegree
              value='°F'
              type='fahrenheit'
              cs={checked ? '' : 'text-gray_100'}
            />
            <SwitchDegree
              value='°C'
              type='celsius'
              cs={!checked ? '' : 'text-gray_100'}
            />
          </ToggleSwitch>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
