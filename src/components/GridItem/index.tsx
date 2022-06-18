import { GridItemType } from '../../types/GridItem.type';
import * as C from './styles';
import b7SVG from '../../svgs/b7.svg';
import items from '../../data/items';

type Props = {
  item: GridItemType;
  onClick: () => void;
}

const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container
      showBackground={item.permanentShown == true || item.shown == true}
      onClick={onClick}
    >

      {item.permanentShown == false && item.shown == false &&
        <C.Icon opacity={'0.1'} src={b7SVG} alt='' />
      }
      {(item.permanentShown == true || item.shown == true) && item.item !== null &&
        <C.Icon opacity={'1'} src={items[item.item].icon} alt='' />
      }
    </C.Container>
  )
}

export default GridItem;