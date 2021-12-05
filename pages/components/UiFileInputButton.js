import { console, FormData } from "globalthis/implementation";
import React from "react";


// function loadData() {
const fileInputRef = React.useRef(null);
const formRef = React.useRef(null);

const onClickHandler = () => {
    fileInputRef.current?.click();
};

const onChangeHandler = (event) => {
    console.log(event);
    if (!event.target.files?.length) {
        return;
    }

    const formData = new FormData();
    console.log(formData);

    formData.append(event.target.jobName, event.target.fileLocation);


    // Array.from(event.target.files).forEach((file) => {
    //   formData.append(event.target.name, file);
    // });

    console.log(formData);

    props.onChange(formData);

    formRef.current?.reset();
    };


// }


class UiFileInputButton extends React.Component {
    constructor(props) {
      super(props);
    }

    // loadData();

    // Array.from(event.target.files).forEach((file) => {
    //   formData.append(event.target.name, file);
    // });
    // console.log(formData);
    
  
    render() {

        return (
            <form ref={formRef}>
                <button type="button" onClick={onClickHandler}>
                    {props.label}
                </button>
                <input
                    accept={props.acceptedFileTypes}
                    multiple={props.allowMultipleFiles}
                    name={props.uploadFileName}
                    onChange={onChangeHandler}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    type="file"
                />
            </form>
        );
    }
}

UiFileInputButton.defaultProps = {
    acceptedFileTypes: '',
    allowMultipleFiles: false,
  };

export default UiFileInputButton;  
