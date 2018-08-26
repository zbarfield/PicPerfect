import React, { Component } from 'react';
import PicViewer from '../components/PicViewer';
import PicToolBox from '../components/PicToolBox';

class PicEditor extends Component {
  render(){
    return(
      <React.Fragment>
        <style>{'body { background-color: #263238; }'}</style>
        <div class="row">
          <div class="col s3">
            <PicToolBox/>
          </div>
          <div class="col s6">
            <PicViewer/>
          </div>
        </div>
        <div class="row">
        <textarea rows="4">
            At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
        </textarea>
        </div>
      </React.Fragment>
    );
  }
}

export default PicEditor
