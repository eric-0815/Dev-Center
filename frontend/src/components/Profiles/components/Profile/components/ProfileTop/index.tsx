import React from "react";

const ProfileTop = ({ profile }: any) => {
  const { status, company, location, website, user } = profile;
  return (
    <div className="profile__top bg-primary p-2">
      <img className="round-img my-1" src={user?.avatar} alt="" />
      <h1 className="large">{user?.name}</h1>
      <p className="lead">
        {status} {company ? <span> at {company}</span> : null}
      </p>
      <p>{location ? <span>{location}</span> : null}</p>
      <div className="profile__top__icons my-1">
        {website ? (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        ) : null}
        {/* {social
          ? Object.entries(social)
              .filter(([_, value]) => value)
              .map(
                ([key, value]) =>
                  value && (
                    <a
                      key={key}
                      href={value.toString()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fab fa-${key} fa-2x`}></i>
                    </a>
                  )
              )
          : null} */}
      </div>
    </div>
  );
};

export default ProfileTop;
