import {styled} from '@mui/material/styles';
import { Button, Checkbox, FormControl, FormGroup, type ButtonProps, type CheckboxProps, type FormControlProps, type FormGroupProps } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export const FilterButton = styled(Button)<ButtonProps>(() => ({
    height: '80%'
}))

export const FilterIcon = styled(FilterListIcon)(({theme}) => ({
    marginRight: theme.spacing(1)
}))

export const FilterForm = styled(FormControl)<FormControlProps>(({theme}) => ({
    margin: theme.spacing(2),
    color: 'black'
}))

export const StatusOptions = styled(FormGroup)<FormGroupProps>(({theme}) => ({
    padding: theme.spacing(1),
    color: 'black'
}))

export const GreyOutlinedCheckbox = styled(Checkbox)<CheckboxProps>(({theme}) => ({
    color: theme.palette.text.disabled
}))