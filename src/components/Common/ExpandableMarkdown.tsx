import { Box, Button, Typography, type TypographyProps } from "@mui/material";
import MuiMarkdown from "mui-markdown";
import { useState } from "react";

function ExpandableMarkdown({description} : {description: string}) {
    const readMoreRequired: boolean = (description.length > 410) ? true : false;
    const collapsedDescription: string = description.slice(0, 411) + "..." ;
    const [isExpanded, setIsExpanded] = useState(false);

    const markdownOverrides = {
          p: {
            component: Typography as TypographyProps,
            props: { variant: "body1", paragraph: true, sx: { mb: 3 } }
          },
          ul: {
            component: 'ul' as any,
            props: { style: { marginBottom: '24px' } }
          }
        } as any;

    return (
        <>
        {readMoreRequired ? (
            <>
                {isExpanded ? (
                <Box>
                    <MuiMarkdown overrides={markdownOverrides}>
                        {description}
                    </MuiMarkdown>
                    <Button
                    variant='text'
                    disableRipple
                    color="inherit"
                    onClick={() => setIsExpanded(false)}
                    >
                        show less
                    </Button>
                </Box>
                ) : (
                <Box>
                    <MuiMarkdown overrides={markdownOverrides}>
                        {collapsedDescription}
                    </MuiMarkdown>
                    <Button
                    disableRipple
                    variant='text'
                    color="inherit"
                    onClick={() => setIsExpanded(true)}
                    >
                        show more
                    </Button>
                </Box>
                )}
            </>
            ) : (
            <MuiMarkdown overrides={markdownOverrides}>{description}</MuiMarkdown>
            )
        }
        </>
    )
}

export default ExpandableMarkdown;