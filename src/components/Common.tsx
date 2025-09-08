import { Typography } from '@mui/material';
import Button, { type ButtonProps } from '@mui/material/Button';

interface AppBarButtonProps extends ButtonProps {
    label : string;
}

export const AppBarButton = ({ label, ...props } : AppBarButtonProps) => (
    <Button {...props}>
        <Typography variant='h6'>
            {label}
        </Typography>
    </Button>
);