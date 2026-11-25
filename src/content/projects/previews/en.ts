import thumbnailStrato from "../../../assets/thumbnails/strato.svg";
import thumbnailKarunatech from "../../../assets/thumbnails/karunatech.svg";
import thumbnailTaskflow from "../../../assets/thumbnails/taskflow.svg";
import thumbnailSmartcity from "../../../assets/thumbnails/smartcity.svg";
import thumbnailFacevote from "../../../assets/thumbnails/facevote.svg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Strato",
    slug: "strato",
    thumbnail: thumbnailStrato,
    description: "AI-powered student companion",
  },
  {
    title: "KarunaTech",
    slug: "karunatech",
    thumbnail: thumbnailKarunatech,
    description: "Hospital management system",
  },
  {
    title: "TaskFlow",
    slug: "taskflow",
    thumbnail: thumbnailTaskflow,
    description: "AI project management app",
  },
  {
    title: "Smart City",
    slug: "smartcity",
    thumbnail: thumbnailSmartcity,
    description: "Interactive city simulation",
  },
  {
    title: "FaceVote",
    slug: "facevote",
    thumbnail: thumbnailFacevote,
    description: "AI-based voting concept",
  },
] as const satisfies ProjectPreview[];
