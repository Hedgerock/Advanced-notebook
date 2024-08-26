import React from 'react';
import { useTodoContext } from '../hooks';

const DataWrapper = ({ data, children }) => {
    return React.cloneElement(children, { data });
}

export const CopyContainer = ({ children }) => {
    const { copyData } = useTodoContext();

    return (
        <div className="copy-container">
            {copyData.map(el => (
                <DataWrapper key={el.id} data={el}>
                    {children}
                </DataWrapper>
            ))}
        </div>
    );
};
