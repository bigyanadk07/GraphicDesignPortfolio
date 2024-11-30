import React, { useState } from 'react';
import { Heart, Share2, MessageCircle } from 'lucide-react';

interface Props{
    imageUrl: string;
    title: string;
    description: string;
    userAvatar: string;
    username: string;
}

const PinterestPost:React.FC<Props> = ({ 
  imageUrl, 
  title, 
  description, 
  userAvatar, 
  username 
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 1000));

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img 
          src={imageUrl || "/api/placeholder/400/400"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Information Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        {/* Header with User Info */}
        <div className="flex items-center mb-4">
          <img 
            src={userAvatar || "/api/placeholder/40/40"} 
            alt={username} 
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-semibold text-gray-800">{username || "Anonymous"}</span>
        </div>

        {/* Title and Description */}
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLike} 
              className="flex items-center space-x-1"
            >
              <Heart 
                color={liked ? 'red' : 'gray'} 
                fill={liked ? 'red' : 'none'}
              />
              <span>{likeCount}</span>
            </button>
            <button className="flex items-center space-x-1">
              <MessageCircle color="gray" />
              <span>24</span>
            </button>
          </div>
          
          <button>
            <Share2 color="gray" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinterestPost;