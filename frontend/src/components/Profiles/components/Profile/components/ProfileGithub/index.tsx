import React, { useEffect } from "react";
import { getGithubReposAsync } from "../../../../../../slices/profileSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../store/configureStore";

const ProfileGithub = ({ username }: any) => {
  const dispatch = useAppDispatch();

  const { repos } = useAppSelector((state) => state.profileState);

  useEffect(() => {
    dispatch(getGithubReposAsync(username));
  }, [dispatch, username]);

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">Github Repos</h2>
      {repos.map((repo: any) => (
        <div key={repo.id} className="repo bg-white p-1 my-1">
          <div>
            <h4>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div>
            <ul>
              <li className="badge badge-primary">
                Stars: {repo.stargazers_count}
              </li>
              <li className="badge badge-dark">
                Watchers: {repo.watchers_count}
              </li>
              <li className="badge badge-light">Forks: {repo.forks_count}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileGithub;
