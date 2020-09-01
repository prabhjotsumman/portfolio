import React from "react";

import ProjectTags from "../Misc/ProjectTags";

export const Project = (props) => {
    const { title, link, description, tags } = props;
    return (
        <div className="FeaturedProject-Container" style={{ marginBottom: '60px' }}>
            <h1 className="Project-Header  Margin-Top">{title}</h1>
            <div className="Project-Image-Container"
                style={{ backgroundImage: `url("${link}")`, backgroundSize: 'cover' }}>
                <a
                    className="Project-Image"
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div className="Project-Inner-Background"></div>
                    <span className="Project-Name">
                        <i class="fas fa-external-link-alt"></i>
                    </span>
                </a>
            </div>
            <p className="Project-Info">{description}</p>
            <ProjectTags tags={tags} />
        </div>
    );
};
