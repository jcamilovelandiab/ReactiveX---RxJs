import { GithubUser } from "./github-user.interface";

export interface GithubUserListResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}