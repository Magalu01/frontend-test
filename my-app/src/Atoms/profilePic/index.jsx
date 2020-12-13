import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './profilePic.scss';
import placeHolder from 'Assets/Icons/blacksquare.png';

const ProfilePic = ({imgUrl}) => {
    const [hasError, setHasError] = useState(true);

    useEffect(() => {
        if (imgUrl) setHasError(false);
    }, [imgUrl]);

    return (
        <div className='ProfilePic'>
            {hasError ? <img src={placeHolder} alt="Hero"/> : "Loaded"}
        </div>
    );
}

ProfilePic.propTypes = {
    imgUrl: PropTypes.string
}

ProfilePic.defaultProps = {
    imgUrl: null
}

export default ProfilePic;