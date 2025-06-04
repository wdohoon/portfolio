export interface Project {
  name: string;
  github?: string;
  live?: string;
  description?: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    name: "하루 끝",
    github: "https://github.com/oz-EndOfDay/FE",
    live: "https://www.endofday.store/",
    description: "NEXT.JS 기반으로 제작한 일기장 프로젝트, Vercel 배포.",
    techStack: ["NEXT.JS", "React", "TailwindCSS", "Vercel", "TypeScript", "Redux Toolkit", "React Query"],
  },
  {
    name: "Movie DH",
    github: "https://github.com/wdohoon/Movie",
    live: "https://glittering-torrone-89e130.netlify.app/",
    description: "React 기반으로 영화 API를 연동한 영화 정보 사이트, Netlify 배포.",
    techStack: ["React", "ContextAPI", "TailwindCSS", "Supabase", "JavaScript"],
  },
  {
    name: "다움성형외과",
    live: "https://www.dawoomps.com/",
    description: "회사 재직 중 제작한 상업용 사이트.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP"],
  },
  {
    name: "이루다몰(클래시스몰)",
    live: "https://classysshop.com/",
    description: "회사 재직 중 제작한 상업용 사이트.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma", "AJAX", "AWS"],
  },
  {
    name: "TeamHope",
    live: "http://www.teamhope.co.kr/",
    description: "회사에서 제작한 기업용 사이트.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma"],
  },
  {
    name: "Bhidex",
    live: "https://bhidex.gabia.io/",
    description: "전문 사이트 개발 경험.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma"],
  },
  {
    name: "사주보궁",
    live: "http://saju79.net/",
    description: "사주/운세 서비스 사이트.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma"],
  },
  {
    name: "마더스 제약",
    live: "http://www.mtspharm.co.kr/",
    description: "제약 관련 사이트 구축.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma"],
  },
  {
    name: "한식세끼",
    live: "https://xn--h10b903achbe83b.com/",
    description: "한국 음식 관련 상업 사이트.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma"],
  },
  {
    name: "Moden7ai",
    live: "http://moden7ai.com",
    description: "회사 홍보 서비스 프로젝트.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma"],
  },
  {
    name: "Kidb",
    live: "https://www.kidb.com/",
    description: "기업 정보 관련 프로젝트.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma"],
  },
  {
    name: "종로학원",
    live: "https://www.jongro.co.kr/",
    description: "유지보수 및 기능 개선.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma"],
  },
  {
    name: "셀트리온",
    live: "https://www.celltrion.com",
    description: "바이오테크 기업 웹사이트 유지보수.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma"],
  },
  {
    name: "Kacelab 포트폴리오",
    live: "https://www.kacelab.com/Work.php",
    description: "Kacelab 포트폴리오 섹션 작업.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "PHP", "Figma"],
  },
];
