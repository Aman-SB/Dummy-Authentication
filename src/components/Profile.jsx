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
                    const response = await fetch(`https://dummyjson.com/users/${parsedUserData.id}`);
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
            <h2>Profile Page</h2>
            {userData ? (
                <div>
                    <p>Welcome, {userData.username}!</p>
                    {}
                </div>
            ) : (
                <p>No user data found. Please log in.</p>
            )}
        </div>
    );
};

export default Profile;
