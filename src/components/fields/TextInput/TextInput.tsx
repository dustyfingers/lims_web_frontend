import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const inputTypes = ['email', 'text', 'textarea', 'password'] as const;

interface ITextInput {
    type: typeof inputTypes[number];
    value: string;
    onChange: any;
    label?: string;
    helperText?: string;
}

const TextInput: React.FC<ITextInput> = ({
    type,
    label,
    helperText,
    value,
    onChange,
}: ITextInput) => {
    return (
        <FormControl>
            {label && <FormLabel>{label}</FormLabel>}
            <Input type={type} value={value} onChange={onChange} />
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

export default TextInput;
