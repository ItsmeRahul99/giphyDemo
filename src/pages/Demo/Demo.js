import React from "react";
import "./Demo.scss";
import WebService from "../../utils/Webservice"
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid, Gif } from '@giphy/react-components'
import ReactDOM from 'react-dom'
import Editor from "../Editor/Editor";
// import "quill/dist/quill.snow.css"; // Add css for snow theme

// import { useQuill } from "react-quilljs"; //reinstall it
// const {  quill, quillRef } = require('react-quilljs');

const gf = new GiphyFetch("psfOZFgurRTBK4dLC2okNs4lwttEfXUt");
// const fetchGifs = (offset: 10) => gf.trending({ offset, limit: 10 })

class Demo extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      giphyName: "",
      data:undefined,
      modalGif: undefined
    };
    
    }
    handleChange = this.handleChange.bind(this);
 
  onGoClick() {
    
}

search = async () => {
  try {
    const result = (offset: 10) =>
    gf.search(this.state.giphyName,{ offset, limit: 18 });
    console.log("response", result);
    return result;
   
  } catch (error) {
    console.error(`search`, error);
  }
};
handleChange({ target }) {
  this.setState({
    [target.name]: target.value
  });
  console.log(this.state.giphyName)
}

  render() {
    return (
      <div className="DemoMain">
      <Editor></Editor>

        <div className="searchPart">
        <input type="text" id="giphyName" name="giphyName" 
          value={ this.state.giphyName }
          onChange={ this.handleChange } 
        />
          <button onClick={async () => {
            let result = await this.search();
             this.setState({data: result})
          }}>submit</button>
         {this.state.data != undefined && <div className="giphyData">
          <Grid width={500} columns={2} fetchGifs={this.state.data}  onGifClick={(gif, e) => {
          console.log("gif", gif);
          e.preventDefault();
          this.setState({modalGif:gif});
        }}/>
          </div>} 
          {this.state.modalGif && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, .8)"
          }}
          onClick={e => {
            e.preventDefault();
            this.setState({modalGif: undefined});
          }}
        >
          <Gif gif={this.state.modalGif} width={200} />
        </div>
      )}
        </div>
         


          
        </div>

    );
  }
}

export default Demo;