import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const AllChatsImageContainer = ({ imageURL, onClose }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleOutsideClick = (e) => {
        if (e.target.className.includes("popup-overlay")) {
            onClose();
        }
    };

    const toggleFullScreen = (e) => {
        e.stopPropagation()
        setIsFullScreen(!isFullScreen);
    };

    return (
        <motion.div
            className={`popup-overlay fixed inset-0 ${isFullScreen? 'bg-base-300' : 'fixed inset-0 backdrop-blur-2xl'} bg-opacity-50 flex items-center justify-center z-50`}
            onClick={handleOutsideClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className={`image-container relative ${
                    isFullScreen ? "w-full h-full" : "w-3/4 h-auto"
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={handleOutsideClick}
            >
                {isFullScreen && (
                    <button
                        className="back-button absolute top-4 left-4 bg-white border-1 text-black px-4 py-2 rounded shadow"
                        onClick={toggleFullScreen}
                    >
                        Back
                    </button>
                )}
                <img
                    src={imageURL}
                    alt="Popup"
                    className="popup-image object-contain w-full h-full cursor-pointer rounded-2xl"
                    onClick={toggleFullScreen}
                />
            </motion.div>
        </motion.div>
    );
};

// Adding PropType to solve the issue
AllChatsImageContainer.propTypes = {
    imageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func,
};
