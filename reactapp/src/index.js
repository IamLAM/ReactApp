/*introduction to react */

import React from 'react';
import ReactDOM from 'react-dom';
const JSX=(<div>
<h1>Valid JSX</h1>
<p>Unordered list</p>
<hr></hr>
<br/> 
<ul>
<li>hi</li>
<li>hi</li>
<li>hi</li>
</ul>
</div>);
ReactDOM.render(JSX, document.getElementById('root'))
//first parameters is component and second is a section of html
//if we need to add a class , we need to put classNames

