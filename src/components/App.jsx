import { Component } from "react";
import stickers from "../stickers.json"
import { StickerList } from "./stickerList/StickerList";
import { Choice } from "./choice/Choice";
import { GlobalStyle } from "GlobalStyle";

export class App extends Component{
  state = {
    label: "",

  }

    chooseSticker = (currSticker) =>{
      this.setState({label: currSticker})
    }

  render(){
    return <>
      <StickerList stickers={stickers}  chooseSticker={this.chooseSticker}/>
      <Choice label={this.state.label}/>
      <GlobalStyle/>
    </>
  }
}