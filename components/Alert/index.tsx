import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface BasicAlertProps {
    severity: any;
}
const BasicAlerts = (props: BasicAlertProps) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity={props.severity}>
                This is an error alert — check it out!
            </Alert>
        </Stack>
    );
}

export default BasicAlerts


//error, warning, info, success