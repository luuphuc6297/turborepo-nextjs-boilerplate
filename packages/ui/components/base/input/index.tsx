import { Error } from '@mgslab/ui'
import { Box, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { InputHTMLAttributes } from 'react'
import { Control, useController } from 'react-hook-form'

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    control?: Control<any>
    label?: string
    InputProps?: any
    inputLabel?: string
    [x: string]: any
    onKeyUp?: () => void
}

const CustomInput = styled(TextField)(({ theme }) => ({
    marginBottom: '0 !important',
    color: `${theme.palette.secondary['light']}`,
    '& .MuiTextField-root': {
        marginTop: 0,
    },
    '& .MuiOutlinedInput-root:hover': {
        '& > fieldset': {
            border: `1px solid ${theme.palette.secondary['light']} !important`,
        },
    },
    '& .MuiOutlinedInput-root::placeholder': {
        color: 'rgba(175, 174, 184, 1)',
    },
    '& .MuiInputBase-root': {
        borderColor: 'rgba(233, 233, 240, 1)',
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
        '& > fieldset': {
            border: `1px solid ${theme.palette.primary['main']} !important`,
        },
    },
    '& .MuiOutlinedInput-root': {
        height: 44,
        borderRadius: 4,
        borderColor: 'rgba(233, 233, 240, 1)',
    },
    '& input:valid + fieldset': {
        borderColor: 'rgba(233, 233, 240, 1)',
    },

    '& .MuiFormLabel-root': {
        fontFamily: 'Linik Sans',
        fontSize: '14px',
        borderColor: 'rgba(233, 233, 240, 1)',
    },
    '&:focus .MuiFormLabel-root': {
        color: theme.palette.primary['main'] + ' !important',
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: '1px solid rgba(233, 233, 240, 1)',
    },
}))

const StyledInputLabel = styled(Typography)(({ theme }) => ({
    color: 'rgba(35, 34, 51, 1)',
    fontFamily: 'Linik Sans Semi Bold',
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 600,
    marginBottom: 6,
}))

export function InputField({
    id,
    name,
    control,
    label,
    InputProps,
    inputLabel,
    sx,
    onKeyUp,
    ...inputProps
}: InputFieldProps) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    })
    const router = useRouter()

    return (
        <Box sx={{ height: 72 }}>
            {inputLabel && (
                <StyledInputLabel>
                    {inputLabel}
                    {router.asPath === '/sign-up' ? (
                        <span style={{ color: 'rgba(248, 134, 1, 1)' }}>*</span>
                    ) : (
                        ''
                    )}
                </StyledInputLabel>
            )}
            <CustomInput
                id={id}
                fullWidth
                size="small"
                margin="normal"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onKeyUp={onKeyUp}
                variant="outlined"
                inputRef={ref}
                error={invalid}
                label={label}
                InputProps={InputProps}
                inputProps={inputProps}
                sx={sx}
            />
            {error && <Error error={true}>{error?.message}</Error>}
        </Box>
    )
}
