import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CommentsPopup } from '../allUsers/popups/CommentsPopup';

// @Gojo - Task for the Honored One ♾️
// Rule: Refer to .vscode/gojo-rule.md (React like Gojo Satoru!)

export const Posts = () => {
    const [mockPosts] = useState([
        {
            id: 1,
            username: 'gojo_satoru',
            userImage: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShUSo9igt_50-wQpi-f6KuiTg1LJePiF8YxGTofwfYAwHzaJasQF0bHMbtb4PwwLtIB6pVQvUPElS1oVxLSMVDzekA_L4Jx5S1XZuV',
            postImage: 'https://wallpapers.com/images/featured/gojo-satoru-8sz62hlsg1epni6l.jpg',
            caption: 'The strongest always stands alone at the top. #JujutsuKaisen',
            likes: 10792,
            timestamp: '2 hours ago',
            comments: 324
        },
        {
            id: 2,
            username: 'itadori_yuuji',
            userImage: 'https://storiesmediag.sportskeeda.com/wp-content/uploads/2023/11/01132241/HD-wallpaper-yuuji-itadori-jujutsu-kaisen.jpg',
            postImage: 'https://c4.wallpaperflare.com/wallpaper/1020/631/625/jujutsu-kaisen-yuji-itadori-hd-wallpaper-preview.jpg', 
            caption: 'Training with Gojo-sensei today! #Stronger',
            likes: 8451,
            timestamp: '5 hours ago',
            comments: 211
        },
        {
            id: 3,
            username: 'megumi_fushiguro',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdsC1Y4WM1sIpu6vK6984ObIoHhxUQt4SEQ&s',
            postImage: 'https://i.pinimg.com/736x/5e/c8/95/5ec895fa2073c826b18e616e0b82cc38.jpg',
            caption: 'Summoning new shikigami techniques.',
            likes: 7256,
            timestamp: '1 day ago',
            comments: 178
        }
    ]);

    const [activeComments, setActiveComments] = useState(null);

    return (
        <div className="flex flex-col items-center bg-transparent min-h-screen py-8">
            <div className="w-full max-w-md">
                {/* Dev working notification */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-500 text-white p-4 rounded-lg mb-8 shadow-md"
                >
                    <h2 className="text-xl font-bold">🚧 Development in Progress</h2>
                    <p>Our developers are working hard to bring you the full posts experience!</p>
                </motion.div>

                {/* Demo posts */}
                {mockPosts.map(post => (
                    <motion.div 
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: post.id * 0.2 }}
                        className="bg-red-400 rounded-lg shadow-md mb-6 overflow-hidden"
                    >
                        {/* Post header */}
                        <div className="flex items-center p-3 border-b">
                            <img 
                                src={post.userImage} 
                                alt={post.username} 
                                className="w-8 h-8 rounded-full object-cover mr-2"
                            />
                            <span className="font-semibold">{post.username}</span>
                            <div className="ml-auto">
                                <button className="text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Post image */}
                        <img 
                            src={post.postImage} 
                            alt="Post content" 
                            className="w-full object-cover" 
                            style={{ maxHeight: '500px' }}
                        />

                        {/* Post actions */}
                        <div className="p-3 flex items-center space-x-4">
                            <button className="text-red-500 hover:text-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                            <button className="text-gray-700 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </button>
                            <button className="text-gray-700 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </button>
                            <button className="text-gray-700 hover:text-gray-900 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            </button>
                        </div>

                        {/* Likes count */}
                        <div className="px-3 py-1">
                            <p className="font-semibold">{post.likes.toLocaleString()} likes</p>
                        </div>

                        {/* Caption */}
                        <div className="px-3 py-1">
                            <p>
                                <span className="font-semibold mr-1">{post.username}</span>
                                {post.caption}
                            </p>
                        </div>

                        {/* Comments preview */}
                        <div 
                            className="px-3 py-1 text-gray-500 cursor-pointer hover:text-gray-700"
                            onClick={() => setActiveComments(post)}
                        >
                            <p>View all {post.comments} comments</p>
                        </div>

                        {/* Timestamp */}
                        <div className="px-3 py-2 text-gray-400 text-xs">
                            <p>{post.timestamp}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Comments popup */}
            <AnimatePresence>
                {activeComments && (
                    <CommentsPopup 
                        post={activeComments} 
                        onClose={() => setActiveComments(null)} 
                    />
                )}
            </AnimatePresence>
        </div>
    )
}
