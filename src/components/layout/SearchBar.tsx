import Field from '@components/forms/Field';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import useTranslate from '@hooks/useTranslate';


export default function SearchBar({ name }: Props) {

  const t = useTranslate();

  return (
    <Box
      display="flex"
      sx={{
        color: 'black',
        borderRadius: '.30em',
        background: 'rgba(255, 255, 255, 0.15)',
      }}
    >
      <Field
        name={name}
        placeholder={t("Search...")}
        style={{
          background: 'transparent',
          color: '#ffffff',
          paddingLeft: '1.5em',
        }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
