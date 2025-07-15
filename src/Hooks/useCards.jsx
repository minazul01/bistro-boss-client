import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useCards = () => {
    const {user} = useAuth();
   
    const axiosSecure = useAxios();
    // stanStack query
    const {refetch, data: card} = useQuery({
        queryKey: ['cards', user?.email],
        queryFn: async() => {
            const res = await axiosSecure(`/cards?email=${user?.email}`);
            return res.data;
        }
    })
    return [card, refetch];
};

export default useCards;