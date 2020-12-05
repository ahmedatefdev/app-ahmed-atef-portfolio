import Experience from "./Experience";
import Image from "./Image";
import Link from "./Link";
import ProjectTranslation from "./ProjectTranslation";
import Stack from "./Stack";

type Project = {
  id: number;
  order: number;
  defaultName: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  stackId: number;
  stack: Stack;

  projectTranslations: ProjectTranslation[];
  experiences: Experience[];
  images: Image[];
  links: Link[];
};

export default Project;
