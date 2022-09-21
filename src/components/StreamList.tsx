import List from '@mui/material/List';
import Box from '@mui/material/Box';
import StreamListItem from './StreamListItem';
import { JsonListItem } from '../types';

function StreamList(props: { currentItem: number; itemList: JsonListItem[] }) {
  return (
    <>
      <List>
        {props.itemList.map((item, i) => (
          <StreamListItem
            key={i}
            showNote={false}
            isSelected={props.currentItem === i}
            item={item}
          />
        ))}
      </List>
      <Box height={32} />
      <List>
        {props.itemList.map((item, i) => (
          <StreamListItem
            key={i}
            showNote
            isSelected={props.currentItem === i}
            item={item}
          />
        ))}
      </List>
    </>
  );
}

export default StreamList;
