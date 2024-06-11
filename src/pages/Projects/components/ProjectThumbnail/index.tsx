import { StyleProjectThumbnailMain } from "./styles";

export interface ProjectThumbnailProps {
  key: number;
  name: string;
  image: string;
  description: string;
  deploy: string;
  code: string;
}

export function ProjectThumbnail({ name, image, description, deploy, code }: ProjectThumbnailProps) {
  return (
    <StyleProjectThumbnailMain>
      <div className="container">
        <img src={image} alt="Todo Thumbnail" />
        <div className="infos">
          <h3>{name}</h3>
          <p>{description}</p>
        {/*<div className="used-stacks"> */}
        {/*  <h4>Stacks utilizadas</h4> */}
        {/*</div> */}
        </div>
        <div className="buttons-container">
          <a href={deploy} target="_blank"><button>Ver deploy</button></a>
          <a href={code} target="_blank"><button>Ver código</button></a>
        </div>
      </div>
    </StyleProjectThumbnailMain>
  );
}
