import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Colors } from './palette';
import StreamList from './components/StreamList';
import { JsonListItem } from './types';
import ImageHolder from './components/ImageHolder';
import Box from '@mui/material/Box';

// Use OBS to turn this color to transparent
const StreamChromeKey = styled('div')((_theme) => ({
  backgroundColor: Colors.CHROMA_KEY,
  height: `calc(100vh - 16px)`,
  width: `calc(100vw - 8px)`
}));

function App() {
  const [showInfo, setShowInfo] = useState<undefined | string>(undefined);
  const [itemList, setItemList] = useState<undefined | JsonListItem[]>(
    undefined
  );

  React.useEffect(() => {
    import(`./shows/currentShow.json`).then((list) =>
      setShowInfo(list.default)
    );
  }, []);

  React.useEffect(() => {
    if (showInfo == null) return;
    import(`./shows/${showInfo}/list.json`).then((list) =>
      setItemList(list.default)
    );
  }, [showInfo]);

  return showInfo == null || itemList == null ? (
    <></>
  ) : (
    <IndexedList itemList={itemList} showInfo={showInfo} />
  );
}

const minCurrentItem = -1; // -1 means no item selected. Useful when starting the stream

function IndexedList(props: { itemList: JsonListItem[]; showInfo: string }) {
  const [currentItem, setCurrentItem] = useState<number>(minCurrentItem);

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'ArrowUp') {
      setCurrentItem((oldVal) =>
        oldVal > minCurrentItem ? oldVal - 1 : oldVal
      );
      event.preventDefault();
    }

    if (event.code === 'ArrowDown') {
      setCurrentItem((oldVal) =>
        oldVal === props.itemList.length ? oldVal : oldVal + 1
      );
      event.preventDefault();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <StreamChromeKey>
      <Box
        sx={{
          paddingTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <ImageHolder
          show={props.showInfo}
          image={
            currentItem === minCurrentItem ||
            currentItem > props.itemList.length
              ? undefined
              : props.itemList[currentItem]?.image
          }
        />
        <StreamList currentItem={currentItem} itemList={props.itemList} />
      </Box>
    </StreamChromeKey>
  );
}

export default App;
