import React from "react";

const ProjectTags = (props) => {
    const { tags } = props;
    return (
        <div className="Project-Stacks">
            {tags.map((tag) => (
                <span className="Project-Stack">{tag}</span>
            ))}
        </div>
    );
};

export default ProjectTags;
