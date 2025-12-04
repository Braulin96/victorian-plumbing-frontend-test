import { fn } from "storybook/test";
import { useState } from "react";

import Selector from "./Selector";

export default {
    title: "Example/Selector",
    component: Selector,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: { type: 'number', min: 1, max: 4 }
        },
    },
};

const SelectorWrapper = (args) => {
    const [selectedValue, setSelectedValue] = useState(args.value || 1);

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setSelectedValue(newValue);
        args.onChange(newValue);
    };

    return (
        <Selector
            value={selectedValue}
            onChange={handleChange}
        />
    );
};

export const SelectorDefault = {
    render: SelectorWrapper,
    args: {
        value: 1,
        onChange: fn(),
    },
};