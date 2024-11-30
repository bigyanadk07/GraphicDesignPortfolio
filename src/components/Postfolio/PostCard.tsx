interface PostCardProps {
  id: number;
  title: string;
  imageUrl: string;
  username: string;
  userAvatar: string;
}

export function PostCard({ title, imageUrl, username, userAvatar }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Instagram-style header */}
      <div className="flex items-center p-3 border-b">
        <img 
          src={userAvatar} 
          alt={username}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="ml-2 font-medium text-sm">{username}</span>
        <button className="ml-auto">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            <path d="M19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            <path d="M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
          </svg>
        </button>
      </div>

      {/* Post image */}
      <div className="aspect-square">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Instagram-style footer */}
      <div className="p-3 border-t">
        <div className="flex space-x-4 mb-2">
          <button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>
          <button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </button>
          <button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
            </svg>
          </button>
          <button className="ml-auto">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}