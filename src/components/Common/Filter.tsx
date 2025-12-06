import { FormControlLabel, FormLabel, Grow, Popover, Typography } from "@mui/material";
import { useState, type Dispatch } from "react";
import { FilterButton, FilterForm, FilterIcon, GreyOutlinedCheckbox, StatusOptions } from "./Filter.styling";

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
            <FilterButton
            aria-describedby={id}
            size="small" 
            color="secondary" variant="contained" onClick={handleClick}>
                <FilterIcon />
                Filter
            </FilterButton>
            
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
                <FilterForm 
                component="fieldset" variant="standard">
                    <FormLabel component="legend">
                        <Typography variant="h6" color='black'>Status</Typography>
                    </FormLabel>
                    <Grow in={showValidationMessage} mountOnEnter unmountOnExit>
                        <Typography
                        color="error">
                            At least 1 status must be selected.
                        </Typography>
                    </Grow>
                    <StatusOptions >
                        <FormControlLabel color="primary"
                            control={
                            <GreyOutlinedCheckbox
                                checked={available}
                                onChange={handleChange}
                                name="available"
                             />
                            }
                            label="Available" />
                        <FormControlLabel 
                            control={
                            <GreyOutlinedCheckbox
                                checked={sold}
                                onChange={handleChange}
                                name="sold"
                                />
                            } label="Sold"
                            />
                    </StatusOptions>
                </FilterForm>
            </Popover>
        </>
    )
}

export default Filter;