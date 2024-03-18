import React from "react";

const Profile = () => {
  return (
    <div className="artboard min-h-[60vh] bg-[#4731D3] ">
      <div className="container flex">
        {" "}
        <h1 className="text-start text-[#CBF281] ml-8 mt-6 text-5xl font-bold ">
          Profile
        </h1>
      </div>

      <div className="flex flex-col w-full lg:flex-row mt-12">
        <div className="grid flex-grow w-full card  rounded-box place-items-start ml-2">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Basic Information
          </h2>
          <p>
            <strong className="text-[#CBF281]">City:</strong> Adana
          </p>
          <p>
            <strong className="text-[#CBF281]">Birth Date:</strong> January 1,
            1990
          </p>
          <p>
            <strong className="text-[#CBF281]">Education:</strong> Çukurova
            University
          </p>
          <p>
            <strong className="text-[#CBF281]">Role:</strong> Full Stack
            Developer
          </p>
        </div>
        <figure class="w-full h-64">
          <img
            src="https://plus.unsplash.com/premium_photo-1709311451252-fbe6d75e3cc5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Your Image"
            class="w-full h-full object-cover rounded-lg"
          />
        </figure>

        <div className="grid flex-grow w-full card  rounded-box place-items-start text-white">
          <h2 className="text-3xl font-bold ">About Me</h2>
          <p className="text-left">
            I'm a passionate web developer with a love for creating intuitive
            and dynamic user experiences. When I'm not coding, you'll find me
            exploring the outdoors or experimenting in the kitchen.
          </p>
        </div>
      </div>
    </div>
  );
  /*
    
    <div className="bg-[#4731D3] min-h-[70vh] flex items-center justify-center">
      <div className="container w-full">
        <div className="flex flex-col text-left">
          <div className=" ">
        
            <h1 className="text-4xl  font-bold text-[#CBF281]  "> Profile </h1>
          </div>
          <div className="flex flex-row justify-between ">
      
            <div className="flex-1 p-4">
              <h2 className="text-xl font-bold mb-4">Basic Information</h2>
              <p>
                <strong>City:</strong> Adana
              </p>
              <p>
                <strong>Birth Date:</strong> January 1, 1990
              </p>
              <p>
                <strong>Education:</strong> Çukurova University
              </p>
            </div>

  
            <div className="flex-1 p-4">
              <img
                src="/path/to/your/image.jpg"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>

      
            <div className="flex-1 p-4">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p>
                I'm a passionate web developer with a love for creating
                intuitive and dynamic user experiences. When I'm not coding,
                you'll find me exploring the outdoors or experimenting in the
                kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  */
};

export default Profile;
