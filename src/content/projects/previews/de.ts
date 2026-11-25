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
    description: "KI-gestützter Studentenbegleiter",
  },
  {
    title: "KarunaTech",
    slug: "karunatech",
    thumbnail: thumbnailKarunatech,
    description: "Krankenhausverwaltungssystem",
  },
  {
    title: "TaskFlow",
    slug: "taskflow",
    thumbnail: thumbnailTaskflow,
    description: "KI-Projektmanagement-App",
  },
  {
    title: "Smart City",
    slug: "smartcity",
    thumbnail: thumbnailSmartcity,
    description: "Interaktive Stadtsimulation",
  },
  {
    title: "FaceVote",
    slug: "facevote",
    thumbnail: thumbnailFacevote,
    description: "KI-basiertes Wahlkonzept",
  },
] as const satisfies ProjectPreview[];
