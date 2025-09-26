/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: "https", 
                hostname: "images.unsplash.com", 
                port: '',   
            }, 
            {
                protocol: "https", 
                hostname: "images.pexels.com", 
                port: '',   
            }, 
            {
                protocol: "https", 
                hostname: "private-user-images.githubusercontent.com", 
                port: '',   
            }, 

        ]
    }
};



export default nextConfig;
