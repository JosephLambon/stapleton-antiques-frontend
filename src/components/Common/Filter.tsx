import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grow, Popover, Typography } from "@mui/material";
import { useState, type Dispatch } from "react";
import FilterListIcon from '@mui/icons-material/FilterList';

export type Statuses = {
    available: boolean
    sold: boolean
}

type FilterProps = {
    selectedStatuses: Statuses
    onChangeStatuses: Dispatch<Statuses>
}

function Filter({selectedStatuses, onChangeStatuses} : FilterProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [showValidationMessage, setShowValidationMessage] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        const selectionCount = Object.values(selectedStatuses).filter(s=>s===true).length;

        if(!checked && selectionCount === 1) {
            setShowValidationMessage(true);
            return;
        }
        
        setShowValidationMessage(false);
        onChangeStatuses({
        ...selectedStatuses,
        [name]: checked,
        });
        handleClose();
    };

    const { available, sold } = selectedStatuses;

    return(
        <>
            <Button aria-describedby={id}
            sx={{py:0}}
             size="small" color="secondary" variant="contained" onClick={handleClick}>
                <FilterListIcon sx={{ mr: 1 }} />
                Filter
            </Button>
            
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            >
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">
                        <Typography variant="h6" color="primary">Status</Typography>
                    </FormLabel>
                    <Grow in={showValidationMessage} mountOnEnter unmountOnExit>
                        <Typography
                        sx={{mt:0, mb:0}}
                        color="error">
                            At least 1 status must be selected.
                        </Typography>
                    </Grow>
                    <FormGroup sx={{
                    padding:1,
                    color: 'black'
                }} >
                        <FormControlLabel color="primary"
                            control={
                            <Checkbox
                                checked={available}
                                onChange={handleChange}
                                name="available"
                             />
                            }
                            label="Available" />
                        <FormControlLabel 
                            control={
                            <Checkbox
                                checked={sold}
                                onChange={handleChange}
                                name="sold"
                                />
                            } label="Sold"
                            />
                    </FormGroup>
                </FormControl>
            </Popover>
        </>
    )
}

export default Filter;