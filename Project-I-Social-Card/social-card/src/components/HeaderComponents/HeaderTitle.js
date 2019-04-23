import React from "react";
import "./Header.css";

function HeaderTitle() {
  return (
    <div className = 'header-title'>
      <h5 className = 'school-name'>Lambda School</h5>
      <p className = 'social-handle'>@LambdaSchool -</p>
      <p className='date'>22 Jan</p>
    </div>
  );
}

export default HeaderTitle;