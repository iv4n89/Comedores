import { FormControl, SxProps, Theme } from '@mui/material';
import { Row } from '@nextui-org/react';
import { CSSProperties } from 'react';


interface Props {
    children: React.ReactNode | React.ReactNode[];
    formControlClassName?: string;
    formControlSx?: SxProps<Theme>;
    rowClassName?: string;
    rowStyle?: CSSProperties;
}

export const FormControlBox = ({ children, formControlClassName: className, formControlSx: sx, rowClassName, rowStyle }: Props) => {
    return (
        <Row
            style={{
                ...rowStyle
            }}
            className={rowClassName}
        >
            <FormControl
                className={'mb-3 ' + className}
                sx={{
                    ...sx
                }}
            >
                {children}
            </FormControl>
        </Row>
    )
}