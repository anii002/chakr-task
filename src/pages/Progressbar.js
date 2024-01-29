import React from 'react';

function RoundedProgressBar({ progress }) {
    return (
        <div className="progress rounded">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                { progress }
            </div>
        </div>
    );
}

export default RoundedProgressBar;
