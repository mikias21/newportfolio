const Avatar = () => {
    return(
        <div className="animate-pulse-ring">
            <img
                className="rounded-custom-blob w-60 h-60 ring-4 ring-[#F0ABFC] hover:ring-8 transition-all duration-300"
                src="https://avatars.githubusercontent.com/u/39588361?v=4"
                alt="AVATAR"
            />
        </div>
    );
}

export default Avatar