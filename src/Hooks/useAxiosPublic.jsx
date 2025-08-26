import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-psi-gules.vercel.app/'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;