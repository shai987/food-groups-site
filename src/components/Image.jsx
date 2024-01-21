import PropTypes from 'prop-types';

const Image = (props) => {
        const { src, alt, title, style } = props.img;
        return (
                <img src={src} alt={alt} title={title} style={style} />
        );
}

Image.propTypes = {
        img: PropTypes.shape({
                src: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                style: PropTypes.object,
        }),
}

export default Image;