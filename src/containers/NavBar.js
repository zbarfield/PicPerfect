import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return(
      <nav>
        <div class="nav-wrapper light-blue darken-3">
          <a href="#" class="brand-logo center">PicPerfect</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="badges.html">PicEditor</a></li>
            <li><a href="collapsible.html">Libary</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
 export default NavBar
