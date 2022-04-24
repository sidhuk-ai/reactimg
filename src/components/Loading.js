import React from 'react';
import Skeleton from '@mui/material/Skeleton';

function Loading() {
    return (
        <div>
            <div className="row my-3 ms-0 me-0">
                <div className="col-md-4 mb-4">
                    <Skeleton variant="rectangular" animation='wave' width={210} height={118} />
                </div>
                <div className="col-md-4 mb-4">
                    <Skeleton variant="rectangular" animation='wave' width={210} height={118} />
                </div>
                <div className="col-md-4 mb-4">
                    <Skeleton variant="rectangular" animation='wave' width={210} height={118} />
                </div>
            </div>
        </div>
    )
}

export default Loading