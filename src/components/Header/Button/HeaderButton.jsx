import React from "react";
import { Button } from "antd";
import "./HeaderButton.scss";

const HeaderButton = (props) => {
    return (
        <React.Fragment>
            <Button className="header-button"  icon={props.icon}>
                {props.text}
            </Button>
        </React.Fragment>
    );
}

export default HeaderButton;
