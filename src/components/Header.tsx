import { memo } from "react";

const Header = (props : any) => {
    console.log("Rendering header");
    return <div>{props.title}</div>;
};

export default memo(Header);