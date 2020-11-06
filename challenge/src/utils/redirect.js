/* eslint-disable no-unused-expressions */
import { useHistory } from 'react-router-dom';

const redirect = () => {
  const history = useHistory();
  const { location } = history;
  location.state !== undefined ||
  location.pathname === '/details/' ||
  location.state === ''
    ? ''
    : history.push('/');
};

export default redirect;
