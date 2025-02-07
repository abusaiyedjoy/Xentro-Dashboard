import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const MyProfile = () => {

  return (
    <div className={`bg-transparent`}>
      <div className="min-h-screen text-gray-900 dark:text-gray-100">
        <div className=" flex justify-center items-start h-full min-h-screen mx-auto p-6">

          {/* Profile Card */}
          <div className=" bg-[#eaf2eb] dark:bg-[#2f3630] w-full h-full shadow-lg rounded-lg overflow-hidden p-8 text-center">
            <img 
              src="https://i.ibb.co.com/DLcr2Vk/sam-moghadam-khamseh-yx-ZSAjy-To-P4-unsplash.jpg"
              alt="Profile Avatar"
              className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300 dark:border-gray-700"
            />
            <h2 className="text-2xl font-semibold mt-4">Abu Saiyed Joy</h2>
            <p className="text-green-600 dark:text-green-500">Admin</p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://github.com/abusaiyedjoy" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-700">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-700">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-700">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;
