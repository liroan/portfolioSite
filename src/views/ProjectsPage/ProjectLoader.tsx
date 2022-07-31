import React from "react"
import ContentLoader from "react-content-loader"

const ProjectLoader = (props: any) => (
    <ContentLoader
        speed={2}
        width="30%"
        height={200}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="-16" y="41" rx="3" ry="3" width="100%" height="200" />
    </ContentLoader>
)

export default ProjectLoader;