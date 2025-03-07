import { Sticker } from "components/sticker/Sticker"
import { List } from "./StickerList.styled"

export const StickerList = (props) =>{
    return <List>
        {props.stickers.map((sticker)=>{
            return  <Sticker
                img={sticker.img}
                label={sticker.label}
                chooseSticker={props.chooseSticker}
            />
        })}
    </List>
}