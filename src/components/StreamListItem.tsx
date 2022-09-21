import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import dcSparkLogo from '../assets/dcSparkLogo.svg';
import flintLogo from '../assets/flintLogo.svg';
import milkomedaLogo from '../assets/milkomedaLogo.svg';
import paimaLogo from '../assets/paimaLogo.svg';
import { Colors, firaSansFamily } from '../palette';
import { JsonListItem, StoryKind } from '../types';

function getLogo(storyKind: StoryKind): undefined | string {
  if (storyKind === StoryKind.DCSPARK) {
    return dcSparkLogo;
  } else if (storyKind === StoryKind.FLINT) {
    return flintLogo;
  } else if (storyKind === StoryKind.MILKOMEDA) {
    return milkomedaLogo;
  } else if (storyKind === StoryKind.PAIMA) {
    return paimaLogo;
  } else {
    return undefined;
  }
}

function StreamListItem(props: {
  isSelected: boolean;
  showNote: boolean;
  item: JsonListItem;
}) {
  const logo = getLogo(props.item.type);
  return (
    <ListItem
      dense={props.showNote}
      sx={{
        marginBottom: props.showNote ? 0 : '8px',
        backgroundColor: props.isSelected
          ? Colors.BACKGROUND_SELECTED
          : Colors.BACKGROUND_UNSELECTED,
        marginLeft: props.isSelected ? 4 : 0
      }}
    >
      <Box sx={{ paddingTop: '4px', marginRight: 2 }}>
        {logo == null ? (
          <Box width="24px" height="24px" />
        ) : (
          <img src={logo} width="24px" height="24px" />
        )}
      </Box>
      <ListItemText
        primaryTypographyProps={{
          style: {
            color: Colors.TEXT,
            fontFamily: firaSansFamily,
            letterSpacing: 'initial'
          }
        }}
        primary={props.item.title}
        secondaryTypographyProps={{
          style: {
            color: Colors.TEXT,
            fontFamily: firaSansFamily,
            letterSpacing: 'initial'
          }
        }}
        secondary={props.showNote ? props.item.note : null}
      />
    </ListItem>
  );
}

export default StreamListItem;
