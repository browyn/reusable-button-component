import React from 'react';


const Button = ({
    /*
        // First line parameters
        @params startIconStyle's and endIconStyle's default value is "outlined", you can change this by specifying "filled" as a value
        @params startIcon and endIcon takes the value of the icon in text and puts them in their respective position

        // Second line parameters
        Takes the props responsible for the various styles of the button component

        // Third line paramenters
        Takes the text, onClick event and custom classes to enable styling to preference
    */
    startIcon, startIconStyle, endIcon, endIconStyle,
    variant, disabled, disableShadow, size, color, fullWidth, textTransform,
    classes, btnClickEvent, text
}) => {
    return (
        <>
            <button
                onClick={btnClickEvent}
                type="button"
                className={`${variant ? variant : "default"} ${size ? size : "sm"} ${disabled ? "disabled" : "enabled"} ${disableShadow ? "disableShadow" : "enableShadow"} ${fullWidth ? "fullWidth" : "fixedWidth"} ${textTransform ? textTransform : "capitalize"} ${color ? color : ""} ${classes ? classes : ""}`}
            >

                {startIcon &&
                    <span className={startIconStyle === "filled"
                        ? "material-icons"
                        : "material-icons-outlined"}>
                        {startIcon}
                    </span>}

                {text ? text : "Default"}

                {endIcon &&
                    <span className={endIconStyle === "filled"
                        ? "material-icons"
                        : "material-icons-outlined"}>
                        {endIcon}
                    </span>}

            </button>
        </>
    );
};

export default Button;