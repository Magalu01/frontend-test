import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as HeartIcon} from 'Assets/Icons/Heart.svg'
import './HeroInfo.scss'

const HeroInfo = ({heroName, isFavorite, onHeartClick, onHeroNameClick}) => (
    <div className='HeroInfo'>
        <span
            className='HeroInfo__hero-name'
            onClick={onHeroNameClick}
            role='link'
            tabIndex={0}
        >
            {heroName}
        </span>
        <div 
            className={classNames('HeroInfo__heart-icon', {
                'HeroInfo__heart-icon--filled': isFavorite
            })}
            onClick={onHeartClick}
            role='button'
            tabIndex={0}
        >
            <HeartIcon />
        </div>
    </div>
);

HeroInfo.propTypes = {
    heroName: PropTypes.string,
    isFavorite: PropTypes.bool,
    onHeartClick: PropTypes.func.isRequired,
    onHeroNameClick: PropTypes.func.isRequired
}

HeroInfo.defaultProps = {
    heroName: '',
    isFavorite: false
}

export default HeroInfo;