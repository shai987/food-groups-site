import '../assets/css/FormFrame.css'; // import the CSS file

const FormFrame = (props) => {
        return (
                <>
                        <div className="form-frame-container">
                                <div className="form-frame">
                                        {props.children}
                                </div>
                        </div>
                </>
        );
}

export default FormFrame;
