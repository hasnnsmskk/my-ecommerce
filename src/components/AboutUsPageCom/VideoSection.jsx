import React from 'react';

const VideoSection = () => {
    return (
        <div className="flex justify-center items-center bg-gray-200 rounded-lg overflow-hidden max-w-md mx-auto sm:max-w-xl">
            <div className="relative w-full h-48 sm:h-72 md:h-96">
                {/* Video Thumbnail */}
                <img
                    src="path-to-your-thumbnail.jpg"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <button className="bg-blue-500 text-white rounded-full p-4 hover:bg-blue-700">
                        <svg
                            xmlns="https://www.youtube.com/watch?v=XGGXlj6grzQ"
                            className="h-8 w-8"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default VideoSection;
