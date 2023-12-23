import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
    const [usernameState, setUsernameState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: usernameState,
                    password: passwordState,
                }),
            });

            if (response.ok) {
                const userObject = await response.json();
                console.log("Response:", userObject);
                const impData = {"id":userObject.id ,
                "token" : userObject.token
                }
                localStorage.setItem("user", JSON.stringify(impData));
                navigate('/profile');
            } else {
                console.error("Authentication failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex justify-center h-max">
            <div className="flex flex-col">
                <div className="flex flex-col gap-2 border-2 w-96 shadow-md m-4 p-10">
                    <span className="text-left text-lg">Welcome Back!👋</span>
                    <h1 className="text-left text-2xl font-semibold">
                        Sign in the account
                    </h1>
                    <span className="text-left font-medium">Your email</span>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={usernameState}
                        onChange={(e) => setUsernameState(e.target.value)}
                        placeholder="atuny0"
                        className="border-2 border-neutral-400 shadow-md"
                    />
                    <span className="text-left font-medium">Password</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={passwordState}
                        onChange={(e) => setPasswordState(e.target.value)}
                        placeholder="9uQFF1Lh"
                        className="border-2 border-neutral-400 shadow-md"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white text-xl p-2 m-2 rounded-md font-semibold"
                        onClick={handleClick}
                    >
                        CONTINUE
                    </button>
                    <div>
                        <span className="text-blue-500">
                            Forget your password?
                        </span>
                    </div>
                </div>
                <p>
                    Don't have an account?{" "}
                    <span className="text-blue-500">Sign up</span>
                </p>
            </div>
        </div>
    );
};

export default Card;
