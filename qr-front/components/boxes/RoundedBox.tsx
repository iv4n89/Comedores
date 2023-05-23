import { Box, SxProps, Theme } from '@mui/material';

interface Props {
    children: React.ReactNode | React.ReactNode[];
    sx?: SxProps<Theme>;
}

export const RoundedBox = ({ children, sx }: Props) => {

    return (
        <Box sx={{
            width: '100%',
            border: '1px solid rgba(138,19,209,0.3)',
            borderRadius: '25px',
            p: 3,
            height: '65vh',
            position: 'relative',
            paddingBottom: '60px',
            boxShadow: 1,
            ...sx
        }}
        >
            { children }
        </Box>
    )
}