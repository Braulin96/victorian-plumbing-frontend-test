import { fn } from "storybook/test";
import { useState } from "react";

import Pagination from "./Pagination";

export default {
    title: "Example/Pagination",
    component: Pagination,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        page: { control: { type: 'number', min: 0 } },
        totalPages: { control: { type: 'number', min: 1 } },
    },
};

const PaginationWrapper = (args) => {
    const [page, setPage] = useState(args.page || 0);

    return (
        <Pagination
            {...args}
            page={page}
            setPage={setPage}
        />
    );
};

export const PaginationDefault = {
    render: PaginationWrapper,
    args: {
        page: 0,
        totalPages: 10,
    },
};
