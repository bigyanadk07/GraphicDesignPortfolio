interface LogoCardProps {
  id: number;
  name: string;
  imageUrl: string;
}

 const LogoCard =({ id, name, imageUrl, }: LogoCardProps)  =>{
  return (
    <div className="relative">
      <div className="absolute -top-8 left-0 text-sm text-gray-400">{id}</div>
      <div 
        className="aspect-[4/3] flex items-center justify-center rounded-lg p-12 transition-all duration-300 bg-blend-soft-light"
      >
        <img 
          src={imageUrl} 
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}

export default LogoCard;