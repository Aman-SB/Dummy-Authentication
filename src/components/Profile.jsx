import React, { useEffect, useState } from "react";

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem("user");

        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            console.log(parsedUserData);

            const fetchUserDetails = async () => {
                try {
                    const response = await fetch(
                        `https://dummyjson.com/users/${parsedUserData.id}`
                    );
                    const data = await response.json();
                    console.log(data);
                    setUserData(data);
                } catch (error) {
                    console.error("Error fetching user details", error);
                }
            };
            fetchUserDetails();
        }
    }, []);

    return (
        <div>
            <h1 className="text-center text-white text-shadow-md text-5xl mb-10 ml-[-50px] text-center text-white text-shadow-md text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-[-80px] ml-[-50px] sm:text-5xl sm:mb-[-50px] sm:ml-0">
                Profile Page
            </h1>
            {userData ? (
                <div className="flex justify-center items-center gap-10 sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-10">
                    <div className="text-lg font-semibold text-white bg-blue-500 rounded-lg p-4 shadow-lg mt-16 text-shadow-md sm:scale-80">
                        <img
                            src={userData?.image}
                            className="w-[150px] h-[150px] mx-auto transform -translate-y-1/2 rounded-full overflow-hidden relative z-[4px] shadow-md left-52 top-[-30px] bg-gradient-to-b from-blue-500 via-gray-700 to-blue-900 mb-[-90px] ml-[-117px] mt-[50px]"
                        ></img>
                        <p className="mb-4 mx-7 login sm:scale-80">
                            Name : {userData?.firstName} {userData?.maidenName}{" "}
                            {userData?.lastName}
                        </p>
                        <p>Age : {userData?.age}</p>
                        <p>Gender : {userData?.gender}</p>
                        <p>Email : {userData?.email}</p>
                        <p>Phone : {userData?.phone}</p>
                        <p>Birth : {userData?.birthDate}</p>
                        <p>Blood Group : {userData?.bloodGroup}</p>
                        <p>
                            Height : {userData?.height} Weight :{" "}
                            {userData?.weight}
                        </p>
                        <p>University : {userData?.university}</p>
                    </div>
                </div>
            ) : (
                <p>No user data found. Please log in.</p>
            )}
        </div>
    );
};

export default Profile;
