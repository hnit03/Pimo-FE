import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/chipStyle';

export default function BasicChips(props) {
    const classes = useStyles();
    const listChip = props.label.map((item) => {
        return (
            <Chip label={item} variant="outlined" className={classes.chip} />
        );
    })
    return (
        <Stack direction="row" spacing={1}  >
            <div className={classes.stack}>
                {listChip}
            </div>

        </Stack>
    );
}