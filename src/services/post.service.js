import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getPostComments: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`)
}
export {postService};
