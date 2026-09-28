const ProfileInfo = () => {
  return (
    <div className="flex gap-3 justify-center items-center">
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/458e5a08-abb0-476a-bfc8-2ab377bebf90-profile_image-300x300.png" alt="User Image" className="h-10 w-10 rounded-full"/>
        <div className="details">
            <p className="font-semibold">Mahesh Rana</p>
            <p className="text-gray-600">maheshrana9520@gmail.com</p>
        </div>
    </div>
  )
}

export default ProfileInfo