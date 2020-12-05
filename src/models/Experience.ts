import ExperienceTranslation from "./ExperienceTranslation";
import Image from "./Image";

type Experience = {
  id: number;
  defaultName: string;
  percent: number;
  order: number;
  active: boolean;
  stackId: number;
  imageId: number;
  image: Image;
  experienceTranslations: ExperienceTranslation[];
};

export default Experience;
