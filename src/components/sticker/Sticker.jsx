import { Text, Item} from "./Sticker.styled"

export const Sticker = ({img, label, chooseSticker}) =>{
    return <Item onClick={()=>{chooseSticker(label)}}>
        <img src={img} alt={label} width="200px"/>
        <Text>{label}</Text>
    </Item>
}