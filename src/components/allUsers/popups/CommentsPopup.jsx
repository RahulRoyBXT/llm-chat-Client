import { useState } from 'react'
import { motion } from 'framer-motion'

// @Gojo - Task for the Honored One ♾️
// Rule: Refer to .vscode/gojo-rule.md (React like Gojo Satoru!)

// Comments Popup Component
export const CommentsPopup = ({ post, onClose }) => {
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([
        { id: 1, username: 'nanami_kento', text: 'Great technique as always!', time: '45m ago' },
        { id: 2, username: 'nobara_kugisaki', text: 'Looking powerful! 💪', time: '32m ago' },
        { id: 3, username: 'sukuna', text: 'Interesting...', time: '22m ago' },
    ]);

    const handleAddComment = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        
        setComments([
            ...comments,
            {
                id: comments.length + 1,
                username: 'user_' + Math.floor(Math.random() * 1000),
                text: newComment,
                time: 'Just now'
            }
        ]);
        setNewComment('');
    };

    return (
        <motion.div 
            className="fixed inset-0 backdrop-blur-2xl bg-opacity-50 z-50 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div 
                className="bg-blue-900 rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center p-4 border-b">
                    <img 
                        src={post.userImage} 
                        alt={post.username}
                        className="w-8 h-8 rounded-full mr-2 object-cover" 
                    />
                    <span className="font-bold">{post.username}</span>
                    <button className="ml-auto text-gray-500" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Comments list */}
                <div className="overflow-y-auto flex-grow p-4">
                    <div className="flex mb-4">
                        <img 
                            src={post.userImage} 
                            alt={post.username}
                            className="w-8 h-8 rounded-full mr-2 flex-shrink-0 object-cover" 
                        />
                        <div>
                            <p>
                                <span className="font-bold mr-2">{post.username}</span>
                                {post.caption}
                            </p>
                            <p className="text-gray-500 text-xs mt-1">{post.timestamp}</p>
                        </div>
                    </div>

                    <div className="border-t pt-4 mt-2">
                        {comments.map(comment => (
                            <div key={comment.id} className="flex mb-4">
                                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 flex-shrink-0"></div>
                                <div>
                                    <p>
                                        <span className="font-bold mr-2">{comment.username}</span>
                                        {comment.text}
                                    </p>
                                    <p className="text-gray-500 text-xs mt-1">{comment.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Add comment form */}
                <form onSubmit={handleAddComment} className="border-t p-3 flex">
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="flex-grow py-1 px-2 focus:outline-none"
                    />
                    <button 
                        type="submit"
                        disabled={!newComment.trim()}
                        className={`font-semibold ml-2 ${!newComment.trim() ? 'text-blue-300' : 'text-blue-500'}`}
                    >
                        Post
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};