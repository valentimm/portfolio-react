import { StyleProjectThumbnailMain } from "./styles";

export interface ProjectThumbnailProps {
  key: number;
  name: string;
  image: string;
  description: string;
  deploy?: string;
  code: string;
}

export function ProjectThumbnail({ name, image, description, deploy, code }: ProjectThumbnailProps) {
  return (
    <StyleProjectThumbnailMain>
      <div className="container">
        <img src={image} alt={`${name} Thumbnail`} />
        <div className="infos">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="buttons-container">
          {deploy && (
            <a href={deploy} target="_blank" rel="noopener noreferrer">
              <button>Ver deploy</button>
            </a>
          )}
          <a href={code} target="_blank" rel="noopener noreferrer">
            <button>Ver código</button>
          </a>
        </div>
      </div>
    </StyleProjectThumbnailMain>
  );
}
