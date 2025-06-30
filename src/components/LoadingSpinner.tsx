import React from "react";

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-12 h-12 border-4 border-t-transparent border-green-950 rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;